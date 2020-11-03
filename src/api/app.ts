import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';

import { HealthCheckController } from './controllers/v1';

const app = createExpressServer({
  controllers: [HealthCheckController],
});

app.listen(9000, () => {
  console.log('API Server is running');
});
