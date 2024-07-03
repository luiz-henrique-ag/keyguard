/* eslint-disable @typescript-eslint/no-empty-function */
import { Pool } from 'pg'

export class Db {
  private static connection: Pool

  private constructor() {}

  static async getInstance(): Promise<Pool> {
    if (!this.connection) {
      this.connection = new Pool({
        connectionString: process.env.DB_CONNECTION_STRING
      })
    }
    return this.connection
  }

  static async closeConnection() {
    await this.connection.end()
  }
}
