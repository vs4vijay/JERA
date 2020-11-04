import { createConnection, Connection } from 'typeorm';
import { User } from './models';

// TODO: Make it properly structured
async function startConnection(): Promise<Connection> {
  const connection: Connection = await createConnection({
    type: 'oracle',
    host: 'localhost',
    port: 1521,
    username: 'system',
    password: 'oracle',
    sid: 'orcl',
    // entities: [__dirname + '\\src\\models\\*.ts'],
    entities: [User],
    logging: true,
  });

  return connection;
}

export default startConnection;
