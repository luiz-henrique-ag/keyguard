import { Account } from 'src/main/db/model/account'
import { User } from 'src/main/db/model/user'

export interface IElectronApi {
  locale: string
  getAllAccounts: () => Promise<Account[] | undefined>
  insertAccount: (account: Account) => Promise<Account | undefined>
  updateAccount: (account: Account) => Promise<boolean>
  deleteAccount: (account: Account) => Promise<boolean>
  searchAccount: (searchString: string) => Promise<Account[] | undefined>
  updateUser: (user: User) => Promise<boolean>
  getUser: () => Promise<User | undefined>
  getById: (id: number) => Promise<Account | undefined>
}

declare global {
  interface Window {
    // electron: ElectronAPI
    api: IElectronApi
  }
}
