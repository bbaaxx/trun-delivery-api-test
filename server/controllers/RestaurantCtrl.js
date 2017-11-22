import Restaurant from '../models/Restaurant';
import Review from '../models/Review';

const RestaurantController = {
  
  async get(ctx) {
    const restaurant = await Restaurant.findOne({ _id: ctx.params.id });
    ctx.body = { restaurant };
  },
  
  async add(ctx) {
    const { body } = ctx.request;
    const restaurant = await Restaurant
      .findOneAndUpdate({ commercialEmail: body.commercialEmail }, body, { upsert: true });
    ctx.body = restaurant._id;
  },
  
  async delete(ctx) {
    const result = await Restaurant.findOneAndDelete({ _id: ctx.query.id });
    ctx.body = { sucess: Boolean(result) };
  },
  
  async rate(ctx) {
    const restaurant = await Restaurant.findOne({ _id: ctx.params.id });
    restaurant.reviews.push(Review.create(ctx.request.body));
    ctx.body = await restaurant.save();
  }
  
};

export default RestaurantController;
