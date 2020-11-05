import { createConnection, Connection } from 'typeorm';

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
    entities: [__dirname + '/models/*.{ts,js}'],
    logging: config.db.logging,
    synchronize: config.db.synchronize,
  });

  return connection;
}

export default getConnection;
