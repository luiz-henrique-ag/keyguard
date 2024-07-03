import { electronApp, is, optimizer } from '@electron-toolkit/utils'
import { BrowserWindow, app, ipcMain, shell } from 'electron'
import fs from 'fs'
import { join } from 'path'
import { Db } from './db/db'
import { Account } from './db/model/account'
import { AccountRepository } from './db/repository/account-repository'

function createWindow(): void {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    minWidth: 600,
    minHeight: 600,
    show: false,
    autoHideMenuBar: true,
    center: true,
    title: 'KeyGuard',
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: true,
      contextIsolation: true
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  ipcMain.handle('getAll', (_) => AccountRepository.getAll())
  ipcMain.handle('insertAccount', (_, account: Account) => AccountRepository.insert(account))
  ipcMain.handle('updateAccount', (_, account: Account) => AccountRepository.update(account))
  ipcMain.handle('deleteAccount', (_, account: Account) => AccountRepository.delete(account))
  ipcMain.handle('searchAccount', (_, searchString: string) =>
    AccountRepository.search(searchString)
  )
  ipcMain.handle('getById', (_, id: number) => AccountRepository.getById(id))
  ipcMain.handle('checkConfiguration', (_) => checkConfiguration())

  createConfigurationFile()

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', async () => {
  if (process.platform !== 'darwin') {
    app.quit()
    await Db.closeConnection()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.

function createConfigurationFile(): void {
  fs.readFile('config.txt', (err, _) => {
    if (err) {
      fs.writeFile('config.txt', 'db_connection_string=', (err) => {
        if (err) throw err
        console.info('Configuration File Created!')
      })
    }
  })
}

function checkConfiguration(): boolean {
  fs.readFile('config.txt', (err, data) => {
    if (err) {
      console.log('erro')
      return
    }
    const connectionString = data.toString().split('=')
    console.log(connectionString)
    return true
  })
  console.log(11)
  return false
}
