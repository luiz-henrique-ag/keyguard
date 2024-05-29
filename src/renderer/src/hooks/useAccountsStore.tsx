import { Account } from 'src/main/db/model/account'
import { create } from 'zustand'

interface AccountState {
  accounts: Account[]
}

interface Actions {
  add: (account: Account) => void
  remove: (account: Account) => void
  update: (account: Account) => void
}

const initialState = (() => {
  const accounts: Account[] = []
  const { getAllAccounts } = window.api
  getAllAccounts().then((res) => res?.forEach((account) => accounts.push(account)))
  return accounts
})()

export const useAccountStore = create<AccountState & Actions>((set) => ({
  accounts: initialState,
  add: (account) => set((state) => ({ accounts: [...state.accounts, account] })),
  remove: (account) =>
    set((state) => ({ accounts: state.accounts.filter((item) => item.id != account.id) })),
  update: (account) =>
    set((state) => ({
      accounts: state.accounts.map((item) =>
        item.id === account.id
          ? {
              ...item,
              account: account.account,
              password: account.password,
              platform: account.platform,
              link: account.link
            }
          : item
      )
    }))
}))
