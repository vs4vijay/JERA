import 'reflect-metadata';
import { createExpressServer, useContainer as useRoutingContainer } from 'routing-controllers';
import { useContainer as useORMContainer } from 'typeorm';
import { Container } from 'typedi';

import { HealthCheckController, UserController } from './controllers/v1';
import startConnection from './db';

// Use TypeDI Container for TypeORM and Routing DI
useORMContainer(Container);
useRoutingContainer(Container);

const app = createExpressServer({
  controllers: [HealthCheckController, UserController],
});

startConnection()
  .then(() => {
    app.listen(9000, () => {
      console.log('API Server is running');
    });
  })
  .catch(console.error);
