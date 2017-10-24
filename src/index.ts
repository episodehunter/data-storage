import 'reflect-metadata';
import { createConnection, Connection } from 'typeorm';
import * as entities from './entity';

function connect({ host, port, username, password, database }): Promise<Connection> {
  return createConnection({
    type: 'mysql',
    host,
    port,
    username,
    password,
    database,
    ssl: 'Amazon RDS',
    pool: {
      max: 1
    },
    entities: [__dirname + '/entity/*.js'],
    synchronize: false
  });
}

export { connect, entities, Connection };
