/* eslint-disable @typescript-eslint/no-empty-function */
import { Pool } from 'pg'

export class Db {
  private static connection: Pool

  private constructor() {}

  static async getInstance(): Promise<Pool> {
    if (!this.connection) {
      this.connection = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'keyguard_db',
        password: 'postgres',
        port: 5432
      })
    }
    return this.connection
  }
}
