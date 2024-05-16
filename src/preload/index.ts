import { contextBridge, ipcRenderer } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('api', {
    locale: navigator.language,
    getAllAccounts: () => ipcRenderer.invoke('getAll'),
    funcao: () => console.log('funcao')
  })
} catch (error) {
  console.error(error)
}
