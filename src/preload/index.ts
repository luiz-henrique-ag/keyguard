import { contextBridge } from 'electron'
// import { AccountRepository } from 'src/db/repository/accountRepository'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('api', {
    locale: navigator.language,
    teste: () => console.log('Hi Electron')
  })
} catch (error) {
  console.error(error)
}
