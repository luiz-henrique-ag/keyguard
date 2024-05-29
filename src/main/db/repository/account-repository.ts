import { Db } from '../db'
import { Account } from '../model/account'

export class AccountRepository {
  static async getAll(): Promise<Account[] | undefined> {
    const client = await Db.getInstance()
    try {
      const result = await client.query<Account>('SELECT * FROM accounts ORDER BY platform')
      return result.rows
    } catch (error) {
      return undefined
    }
  }

  static async search(searchString: string): Promise<Account[] | undefined> {
    const client = await Db.getInstance()
    try {
      const result = await client.query<Account>('SELECT * FROM accounts WHERE account like $1', [
        searchString
      ])
      return result.rows
    } catch (error) {
      return undefined
    }
  }

  static async getById(id: number): Promise<Account | undefined> {
    const client = await Db.getInstance()
    try {
      const result = await client.query<Account>('SELECT * FROM accounts WHERE id=$1', [id])
      return result.rows[0]
    } catch (error) {
      return undefined
    }
  }

  static async insert(account: Account): Promise<Account | undefined> {
    const client = await Db.getInstance()
    try {
      const newAccount = await client.query<Account>(
        'INSERT INTO accounts (account,password,platform,link) VALUES($1,$2,$3,$4) RETURNING *',
        [account.account, account.password, account.platform, account.link]
      )
      return newAccount.rows[0]
    } catch (error) {
      return undefined
    }
  }

  static async update(account: Account): Promise<boolean> {
    const client = await Db.getInstance()
    try {
      await client.query<Account>(
        'UPDATE accounts SET account=$1, password=$2, platform=$3, link=$4 WHERE id=$5',
        [account.account, account.password, account.platform, account.link, account.id]
      )
      return true
    } catch (error) {
      return false
    }
  }

  static async delete(account: Account): Promise<boolean> {
    const client = await Db.getInstance()
    try {
      const x = await client.query<Account>('DELETE FROM accounts WHERE id=$1', [account.id])
      return true
    } catch (error) {
      return false
    }
  }
}
