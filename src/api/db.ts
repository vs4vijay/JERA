import { createConnection, Connection } from 'typeorm';

// TODO: Make it properly structured
async function startConnection(): Promise<Connection> {
  const connection: Connection = await createConnection({
    type: 'oracle',
    host: 'localhost',
    port: 1521,
    username: 'system',
    password: 'oracle',
    sid: 'orcl',
    entities: ['./models/*.ts'],
    logging: true,
  });

  return connection;
}

export default startConnection;
