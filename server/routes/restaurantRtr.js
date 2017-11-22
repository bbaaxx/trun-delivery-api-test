import Router from 'koa-router';
import staticServe from 'koa-static';
import RestaurantController from '../controllers/RestaurantCtrl';

const restaurantRouter  = new Router();

restaurantRouter
  .get('/restaurant/:id', RestaurantController.get)
  .post('/restaurant', RestaurantController.add)
  .delete('/restaurant', RestaurantController.delete)
  .patch('/restaurant/:id/rate', RestaurantController.rate);

export default restaurantRouter;