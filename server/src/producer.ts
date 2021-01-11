import { name } from 'faker';
import { logger} from 'juno-js';

import { config, RabbitMQ, RABBITMQ_CONNECTION_STRING, QUEUES } from './components';

const executeProducer = async () => {
  const rabbitMQ = new RabbitMQ(RABBITMQ_CONNECTION_STRING);
  await rabbitMQ.start();
  // TODO: fake action, end-user creates new task.
  await rabbitMQ.publishInQueue(QUEUES.newTask, name.title());
  setInterval (() => rabbitMQ.publishInQueue(QUEUES.newTask, name.title()), 10000);
};

export { executeProducer };
