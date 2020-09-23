const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const path = require('path')

process.env['APP_PATH'] = app.getAppPath()

let url
if (process.env.NODE_ENV === 'DEV') {
  url = 'http://localhost:8080/'
} else {
  url = `file://${process.env['APP_PATH']}/dist/index.html`
}

app.on('ready', () => {
  let window = new BrowserWindow({
    width: 350,
    height: 560,
    frame: false
  })
  window.setResizable(false)
  window.loadURL(url)
  window.webContents.openDevTools({detatch: true})
})