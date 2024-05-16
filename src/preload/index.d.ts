export interface IElectronApi {
  locale: string
  teste: typeof Promise<Account[] | undefined>
}

declare global {
  interface Window {
    // electron: ElectronAPI
    api: IElectronApi
  }
}
