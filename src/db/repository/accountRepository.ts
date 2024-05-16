import { Db } from '../db'

export class AccountRepository {
  static async getAll(): Promise<Account[] | undefined> {
    const client = await Db.getInstance()
    try {
      const result = await client.query<Account>('SELECT * FROM accounts')
      console.log(result)
      return []
    } catch (error) {
      return undefined
    }
  }

  static async getById(id: number): Promise<Account> {
    return { id: 0, account: '', password: '' }
  }

  static async insert(account: Account): Promise<boolean> {
    return false
  }

  static async update(account: Account): Promise<boolean> {
    return false
  }

  static async delete(account: Account): Promise<boolean> {
    return false
  }
}
