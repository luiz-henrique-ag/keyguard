/* eslint-disable @typescript-eslint/no-empty-function */
import { Pool } from 'pg'

export class Db {
  private static connection: Pool

  private constructor() {}

  // static async create(): Promise<boolean> {
  //   const db = await Db.getInstance()
  //   try {
  //     const hashedPassword = await hashPassword('supabase')
  //     await db.query(
  //       'CREATE TABLE IF NOT EXISTS accounts (id serial primary key, account varchar, password varchar, platform varchar, link varchar)'
  //     )
  //     await db.query('CREATE TABLE IF NOT EXISTS user (user varchar,password varchar)')
  //     await db.query('INSERT INTO user VALUES ($1, $2)', ['keyguard', hashedPassword])
  //     return true
  //   } catch (e) {
  //     return false
  //   }
  // }

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
