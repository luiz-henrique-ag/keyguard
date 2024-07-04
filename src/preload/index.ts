import { Account } from '@/db/model/account'
import { contextBridge, ipcRenderer } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('api', {
    locale: navigator.language,
    getAllAccounts: () => ipcRenderer.invoke('getAll'),
    insertAccount: (account: Account) => ipcRenderer.invoke('insertAccount', account),
    updateAccount: (account: Account) => ipcRenderer.invoke('updateAccount', account),
    deleteAccount: (account: Account) => ipcRenderer.invoke('deleteAccount', account),
    searchAccount: (searchString: string) => ipcRenderer.invoke('searchAccount', searchString),
    getUser: () => ipcRenderer.invoke('getUser'),
    getById: (id: number) => ipcRenderer.invoke('getById', id)
  })
} catch (error) {
  console.error(error)
}
