const {app, BrowserWindow} = require('electron') 
const url = require('url') 
const fs = require('fs')
const path = require('path')  
const electron = require('electron')



let win  



function createWindow() { 
    const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize
    var screenElectron = electron.screen 

    var x_position = (width - 380)
    var y_position = (height - 780)/2

   win = new BrowserWindow({
       width: 400, 
       height: 820,
       x: x_position,
       y: y_position,
       useLastState: true,
       fakeUserAgent: true,
       agent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
       titleBarStyle: 'hidden-inset',
       maximizable: false,
       fullscreenable: false,
       resizable: false
    }) 
   win.loadURL('http://instagram.com'
    /*url.format ({ 
      pathname: path.join(__dirname, 'index.html'), 
      protocol: 'file:', 
      slashes: true 
   })*/) 
   win.webContents.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1')
   win.webContents.on('dom-ready', function() {
    fs.readFile(__dirname + '/main.css', "utf-8", function(error, data) {
        if(!error){
            var formatedData = data.replace(/\s{2,10}/g, ' ').trim()
            win.webContents.insertCSS(formatedData)
        }
    })
   })
}  

app.on('ready', createWindow) 