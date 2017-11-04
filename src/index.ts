import 'reflect-metadata';
import { createConnection, Connection } from 'typeorm';
import { Logger } from '@episodehunter/logger';
import * as entities from './entity';
import { SqlLogger } from './logger';

export type ConnectParams = {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  ssl?: 'Amazon RDS';
  logger?: Logger;
  consoleAllQuerys?: boolean;
};

function connect({
  host,
  port,
  username,
  password,
  database,
  ssl,
  logger,
  consoleAllQuerys
}: ConnectParams): Promise<Connection> {
  const log = logger ? new SqlLogger(logger, Boolean(consoleAllQuerys)) : undefined;
  return createConnection({
    type: 'mysql',
    host,
    port,
    username,
    password,
    database,
    ssl: ssl ? ssl : undefined,
    pool: {
      max: 1
    },
    entities: [__dirname + '/entity/*.js'],
    synchronize: false,
    maxQueryExecutionTime: 1500,
    logger: log
  });
}

export { connect, entities, Connection };
