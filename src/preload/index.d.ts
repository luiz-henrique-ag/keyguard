import { Account } from 'src/main/db/model/account'

export interface IElectronApi {
  locale: string
  getAllAccounts: () => Promise<Account[] | undefined>
  funcao: () => void
}

declare global {
  interface Window {
    // electron: ElectronAPI
    api: IElectronApi
  }
}
