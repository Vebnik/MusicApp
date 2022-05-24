// Import
const path = require("path");
const {BrowserWindow, app} = require("electron");


// Logic
class AppStart {

	#paths = {
		root : null,
		devRoot: 'http://localhost:3000'
	}

	constructor(entryPath) {
		this.#paths.root = entryPath
	}


	// Methods
	#createWindow () {
		const win = new BrowserWindow({
			darkTheme: true,
			width: 1100,
			height: 900,
			resizable: false,
			webPreferences: {
				nodeIntegration: true,
				devTools: true
			},
			frame: false,
			hasShadow: true
		})

		win.loadURL(this.#paths.root || this.#paths.devRoot)
			.catch(err => console.error(err))
	}

	#appEventHandler () {
		app.whenReady()
			.then(() => this.#createWindow())

		app.on('window-all-closed', () => {
			if (process.platform !== 'darwin') {
				app.quit()
			}
		})

		app.on('activate', () => {
			if (BrowserWindow.getAllWindows().length === 0) {
				this.#createWindow()
			}
		})

	}

	start () {
		this.#appEventHandler()
	}

	entryUrl (url) {
		const win = new BrowserWindow({
			darkTheme: true,
			width: 1200,
			height: 900,
			resizable: false
		})

		win.loadURL(url)
			.catch(err => console.error(err))
	}
}

module.exports = { AppStart }