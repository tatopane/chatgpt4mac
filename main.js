const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, 'logo.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  })

  win.loadURL('https://chat.openai.com/?model=gpt-4')
  win.setTitle('ChatGPT 4');
}

app.whenReady().then(createWindow)
