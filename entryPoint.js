// Import
const { AppStart } = require('./src/electronApp/appConfig')
const path = require('path')


// Logic
//const entry = path.resolve(__dirname, path.join('build', 'index.html'))
const appStart = new AppStart()


// Entry
appStart.start()
