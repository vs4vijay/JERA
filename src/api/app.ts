import 'reflect-metadata';
import * as express from 'express';
import { useExpressServer, useContainer as useRoutingContainer } from 'routing-controllers';
import { Connection, useContainer as useORMContainer } from 'typeorm';
import { Container } from 'typedi';

import getConnection from './db';
import config from './config';

class App {
  public app: express.Application;
  public config: Record<string, any>;
  public connection: Connection;

  constructor(config: Record<string, any>) {
    this.app = express();
    this.config = config;
    this.init();
  }

  private async init() {
    // Use TypeDI Container for TypeORM and Routing DI
    useORMContainer(Container);
    useRoutingContainer(Container);

    // TODO: Add middlewares, etc
    useExpressServer(this.app, {
      controllers: [__dirname + '/controllers/**/*.{ts,js}'],
    });

    try {
      this.connection = await getConnection(config);
    } catch (error) {
      console.error(error);
    }
  }

  public start() {
    this.app.listen(this.config['app']['port'], () => {
      console.log(`API Server is running: http://localhost:${this.config['app']['port']}`);
    });
  }
}

const app = new App(config);
app.start();

export default app;
