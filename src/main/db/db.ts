/* eslint-disable @typescript-eslint/no-empty-function */
import { Pool } from 'pg'

export class Db {
  private static connection: Pool

  private constructor() {}

  static async getInstance(): Promise<Pool> {
    if (!this.connection) {
      this.connection = new Pool({
        connectionString:
          'postgres://postgres.hyzobudjrycqrdyxicur:qoRNjyYaljIekS1G@aws-0-sa-east-1.pooler.supabase.com:5432/postgres'
      })
    }
    return this.connection
  }

  static async closeConnection() {
    await this.connection.end()
  }
}
