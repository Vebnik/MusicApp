// Import
const { AppStart } = require('./src/electronApp/appConfig')


// Logic
const appStart = new AppStart(process.env.ENTRY_RENDER || null)


// Entry
appStart.start()
