import Router from 'koa-router';
import staticServe from 'koa-static';
import RestaurantsController from '../controllers/RestaurantsCtrl';

const restaurantRouter  = new Router();

restaurantRouter
  .get('/restaurants', RestaurantsController.get)
  .get('/restaurants/:param', RestaurantsController.getSorted)
  .get('/restaurants/:param/:value', RestaurantsController.getBy);

export default restaurantRouter;