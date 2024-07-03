import { Db } from '../db'
import { User } from '../model/user'

export class UserRepository {
  static async update(user: User): Promise<boolean> {
    try {
      const db = await Db.getInstance()
      await db.query('UPDATE user SET user=$1, password=$2 WHERE id=1', [user.user, user.password])
      return true
    } catch (e) {
      return false
    }
  }

  static async get(): Promise<User | undefined> {
    try {
      const db = await Db.getInstance()
      const result = await db.query<User>('SELECT * FROM user WHERE id=1')
      return result.rows[0]
    } catch (e) {
      return undefined
    }
  }
}
