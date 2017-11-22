import Router from 'koa-router';
import staticServe from 'koa-static';
import OrderController from '../controllers/OrderCtrl';

const orderRouter = new Router();

orderRouter
  .post('/order', OrderController.add);

export default orderRouter;