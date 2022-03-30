const { app, BrowserWindow, ipcMain } = require('electron')
const url = require("url");
const path = require("path");

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            backgroundThrottling: false,
            contextIsolation: false,
        } 
    })

    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, `/dist/test-task/index.html`),
            protocol: "file:",
            slashes: true
        })
    );
    // Open the DevTools.
    mainWindow.webContents.openDevTools()

    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
    if (mainWindow === null) createWindow()
})

ipcMain.on("toggleFullscreen", (event, args) => {
    let browserWindow = BrowserWindow.fromWebContents(event.sender)
    browserWindow.setFullScreen(!browserWindow.isFullScreen())
})

ipcMain.on("alwaysOnTop", (event, args) => {
    let browserWindow = BrowserWindow.fromWebContents(event.sender)
    if(!browserWindow.isAlwaysOnTop()) {
        browserWindow.setAlwaysOnTop(true)
    }
})

ipcMain.on("debugInfo", (event, args) => {
    let browserWindow = BrowserWindow.fromWebContents(event.sender)
    browserWindow.webContents.toggleDevTools()
})

ipcMain.on("reloadApp", (event, args) => {
    let browserWindow = BrowserWindow.fromWebContents(event.sender)
    browserWindow.reload();

    event.sender.send("reloaded", "App Reloaded")
})
 
ipcMain.on("exitApp", (event, args) => {
    let browserWindow = BrowserWindow.fromWebContents(event.sender)
    if(browserWindow.isClosable()) {
       browserWindow.close(); 
    }
    app.exit(0);
})