import { createConnection, Connection } from 'typeorm';

import { User } from './models';

// TODO: Make it properly structured
async function getConnection(config: Record<string, any>): Promise<Connection> {
  const connection: Connection = await createConnection({
    type: config.db.type as never,
    host: config.db.host,
    port: config.db.port,
    username: config.db.username,
    password: config.db.password,
    database: config.db.database, // TODO: Comment this and uncomment next line when using Oracle
    // sid: config.db.database,
    // entities: [__dirname + '\\src\\models\\*.ts'],
    entities: [User],
    logging: true,
    synchronize: true, // TODO: Comment this once stable
  });

  return connection;
}

export default getConnection;
