import Koa from 'koa';
import cors from 'kcors';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';

import database from './database';
import router from './router';
import { installConsumer } from './services/rabbitmq';
import bindServer from './sockets';

const app = new Koa();

app.use(async function(ctx, next) {
  ctx.config = { mapsDmApiKey: process.env.GMAPS_DM_API_KEY || '' };
  ctx.db = database;
  await next();
});

app.use(logger());
app.use(cors());
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

const server = app.listen(process.env.PORT, () => {
  let addr;
  try { 
    addr = server.address();
    bindServer(server);
    installConsumer('notifications', data => console.log(`Notification recieved: ${data}`));
    installConsumer('orders', data => console.log(`Order recieved: ${data}`));
  }
  catch(err) { console.log(err); }
  finally { console.log(`Koa server started at port ${addr.port}`); }
  
});

export default app;