import knex, { Knex } from 'knex';
import { DB_URI } from '../services/types';
import dotenv from 'dotenv';
dotenv.config();

// Load environment variables from .env file

class Database {
  private static instance: Database;
  private _db: Knex;
  private DBURI = process.env.DB_URI
  private devConnection = { user: 'postgres', database: 'binar', password: 'david' }

  constructor() {
    this._db = knex({
      client: 'pg',
      connection: DB_URI,
      // connection: this.devConnection,
      searchPath: ['public'],
    });
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  get db(): Knex {
    return this._db;
  }
}

export default Database.getInstance().db;
