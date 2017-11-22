import Restaurant from '../models/Restaurant';

const RestaurantsController = {
  
  async get(ctx, next) {
    const restaurants = await Restaurant.find({});
    ctx.body = restaurants;
  },
  
  async getSorted(ctx, next) {
    const restaurants = await Restaurant.find({}, { sort: `-${ctx.params.param}` });
    ctx.body = restaurants;
  },
  
  async getBy(ctx, next) {
    const query = { [ctx.params.param]: ctx.params.value };
    const restaurants = await Restaurant.find(query);
    ctx.body = restaurants;
  }
  
};

export default RestaurantsController;
