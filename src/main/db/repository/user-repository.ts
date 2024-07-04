import { Db } from '../db'
import { User } from '../model/user'

export class UserRepository {
  static async getUser(): Promise<User | undefined> {
    try {
      const db = await Db.getInstance()
      const result = await db.query<User>('SELECT * FROM "user" WHERE id=1')
      return result.rows[0]
    } catch (e) {
      return undefined
    }
  }
}
