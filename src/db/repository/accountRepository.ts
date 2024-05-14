import { Db } from '../db'

class AccountRepository {
  async getAll(): Promise<Account[] | undefined> {
    const client = await Db.getInstance()
    try {
      const result = await client.query<Account>('SELECT * FROM accounts')
    } catch (error) {
      return undefined
    }
  }

  async getById(id: number): Promise<Account> {}

  async insert(account: Account): Promise<boolean> {}

  async update(account: Account): Promise<boolean> {}

  async delete(account: Account): Promise<boolean> {}
}
