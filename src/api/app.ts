import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';

import { HealthCheckController } from './controllers/v1';
import startConnection from './db';

const app = createExpressServer({
  controllers: [HealthCheckController],
});

startConnection()
  .then(() => {
    app.listen(9000, () => {
      console.log('API Server is running');
    });
  })
  .catch(console.error);
