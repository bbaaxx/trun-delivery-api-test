import Restaurant from '../models/Restaurant';
import Order from '../models/Order';
import OrderItem from '../models/OrderItem';
import Review from '../models/Review';
import { distanceMatrix } from '../services/googleDistanceMatrix';
import { publishMessage } from '../services/rabbitmq';

const OrderController = {
  async get(ctx) {
    const order = await Order.findOne({ _id: ctx.params.id });
    ctx.body = { order };
  },
  async add(ctx) {
    const { body } = ctx.request;
    
    // 1.- Get estimated delivery time
    const restaurant = await Restaurant.findOne({ _id: body.restaurantId });
    const estimates = await distanceMatrix('', {
      mode: 'driving',
      destinations: `${body.Location.lat}, ${body.Location.lng}`,
      origins: `${restaurant.Location.lat}, ${restaurant.Location.lng}`
    });
    const eta = Math.ceil((Array.isArray(estimates.rows) && Boolean(estimates.rows.length > 0 )) 
      ? (((estimates.rows[0] || {}).elements[0] || {}).duration || {}).value / 60 || 0 : 0);
    
    // 2.- Create order
    const items = body.items.map(x => OrderItem.create({...x, total: x.meal.price * x.amount }));
    const totalCost = items.reduce((tc, cc) => tc += cc.total,0);
    const order = await Order.create({ ...body, totalCost, eta, items }).save();

    // 3.- message the MQ
    publishMessage('orders', `New Order: ${order._id}`);
    publishMessage('notifications', `New order, ETA is: ${eta} minutes`);
    
    // 4.- Send the order back as a response
    ctx.body = order;
  }
};

export default OrderController;
