import Router from 'koa-router';
import staticServe from 'koa-static';
import indexRouter from './routes/indexRtr';
import restaurantRouter from './routes/restaurantRtr';
import restaurantsRouter from './routes/restaurantsRtr';
import orderRouter from './routes/orderRtr';

const router  = new Router();

router
  .use(indexRouter.routes())
  .use(restaurantRouter.routes())
  .use(restaurantsRouter.routes())
  .use(orderRouter.routes());

export default router;