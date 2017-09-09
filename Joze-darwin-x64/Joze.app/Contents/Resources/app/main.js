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
       enableSwipe: true,
       useLastState: true,
       fakeUserAgent: true,
       //agent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
       agent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Version/10.0 Mobile/14D27 Safari/602.1',
       titleBarStyle: 'hidden-inset',
       maximizable: false,
       fullscreenable: false,
       resizable: false,
       show:false,
       title: 'Joze'
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

   win.once('ready-to-show', () => {
    win.show()
  })

  win.on('app-command', (e, cmd) => {
    // Navigate the window back when the user hits their mouse back button
    if (cmd === 'browser-backward' && win.webContents.canGoBack()) {
      win.webContents.goBack()
    }
  })

  win.on('swipe', (e, direction) => {
    // Navigate the window back when the user hits their mouse back button
      //if (direction == "left"){
        win.webContents.goBack()
      //}
  })
}  

//app.dock.setBadge('Joze - Instagram Desktop Client')

app.on('ready', createWindow) 