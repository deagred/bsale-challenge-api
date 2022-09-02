import mysql from 'mysql2/promise';
import { config } from '../config';
import * as Logger from '../utils/Logger';


interface IDatabaseConnectionOptions {
  host: string;
  user: string;
  password: string;
  database: string;
}

class DatabaseConnection {
  private _connection: mysql.PoolConnection;
  private _pool: mysql.Pool;
  private _keepAlive: NodeJS.Timeout;

  constructor(config: IDatabaseConnectionOptions) {
    this._pool = mysql.createPool(config);
    void this.connect();
  }

  private async connect() {
    this._connection = await this._pool.getConnection();
    await this.keepAlive();
  }

  public async query(queryString: string): Promise<any[]> {
    const result = await this._connection.query(queryString)
      .then(res => res[0])
      .catch(err => Logger.debug(err));

    return result as any[];
  }

  private async keepAlive() {
    clearTimeout(this._keepAlive);

    await this._connection.ping();
    Logger.info('Keeping connection alive');

    this._keepAlive = global.setTimeout(() => this.keepAlive(), 4000);
  }
}

const { host, database, password, user } = config.db;
export const conn = new DatabaseConnection({ host, user, password, database });
