import Router from 'koa-router';
import staticServe from 'koa-static';

const indexRouter  = new Router();

indexRouter
  .get('/*', staticServe('public'));

export default indexRouter;