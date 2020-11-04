import { createConnection, Connection } from 'typeorm';

import config from './config';
import { User } from './models';

// TODO: Make it properly structured
async function startConnection(): Promise<Connection> {
  const connection: Connection = await createConnection({
    type: config.db.type as never,
    host: config.db.host,
    port: config.db.port,
    username: config.db.username,
    password: config.db.password,
    sid: config.db.database,
    // entities: [__dirname + '\\src\\models\\*.ts'],
    entities: [User],
    logging: true,
  });

  return connection;
}

export default startConnection;
