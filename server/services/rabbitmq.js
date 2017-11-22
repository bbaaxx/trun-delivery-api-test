import jackrabbit from 'jackrabbit';
const rabbit = jackrabbit(process.env.AMQP_URL);

export const installConsumer = (queue, onData, options = {}) => rabbit
  .default()
  .queue({ name: queue })
  .consume(onData, Object.assign({ noAck: true }, options)); 

export const publishMessage = (queue, message) => rabbit
  .default()
  .publish(message, { key: queue });