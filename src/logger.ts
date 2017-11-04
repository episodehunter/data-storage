import { Logger, QueryRunner } from 'typeorm';
import { Logger as EhLogger } from '@episodehunter/logger';

export class SqlLogger implements Logger {
  constructor(private logger: EhLogger, private consoleAllQuerys = false) {}

  logQuery(query: string, parameters?: any[], queryRunner?: QueryRunner) {
    const params = stringifyParams(parameters);
    this.logger.captureBreadcrumb({
      message: 'executing query',
      category: 'sql',
      data: {
        query,
        parameters: params
      }
    });
    if (this.consoleAllQuerys) {
      console.log(`query: ${query}, parameters: ${params}`);
    }
  }

  logQueryError(error: string, query: string, parameters?: any[], queryRunner?: QueryRunner) {
    const params = stringifyParams(parameters);
    this.logger.captureBreadcrumb({
      message: 'failing query',
      category: 'sql',
      data: {
        query,
        parameters: params,
        error
      }
    });
    console.error(`SQL query: ${query}, parameters: ${params}, error: ${error}`);
  }

  logQuerySlow(time: number, query: string, parameters?: any[], queryRunner?: QueryRunner) {
    const params = stringifyParams(parameters);
    this.logger.captureBreadcrumb({
      message: 'slow query',
      category: 'sql',
      data: {
        query,
        parameters: params
      }
    });
    console.warn(`Slow query: ${query}, params: ${params}, time: ${time}`);
  }

  logSchemaBuild(message: string, queryRunner?: QueryRunner) {
    console.log(message);
  }

  logMigration(message: string, queryRunner?: QueryRunner) {
    console.log(message);
  }

  log(level: 'log' | 'info' | 'warn', message: any, queryRunner?: QueryRunner) {
    console.log(message);
  }
}

function stringifyParams(parameters?: any[]) {
  if (parameters && parameters.length) {
    try {
      return JSON.stringify(parameters);
    } catch (error) {
      // most probably circular objects in parameters
      return String(parameters);
    }
  }
  return '';
}
