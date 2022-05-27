// Import
const path = require("path");
const { BrowserWindow, app } = require("electron");
const { eventHandler } = require('./ipcMain')

// Logic
class AppStart {

	#paths = {
		root: process.env.ENTRY_RENDER || null,
		devRoot: 'http://localhost:3000',
		build: 'dev'
	}

	constructor(build) {
		this.#paths.build = build
	}


	// Methods
	#createWindow () {
		const win = new BrowserWindow({
			darkTheme: true,
			width: 1100,
			height: 650,
			resizable: false,
			webPreferences: {
				webSecurity: false,
				nodeIntegration: true,
				devTools: true,
				preload: path.join(__dirname, 'preload.js'),
				contextIsolation: true
			},
			frame: false,
			hasShadow: true,
		})

		if (this.#paths.root) {
			win.loadFile(this.#paths.root)
				.catch(err => console.error(err))
		} else {
			win.loadURL(this.#paths.devRoot)
				.catch(err => console.error(err))
		}
	}

	#appEventHandler () {
		app.whenReady()
			.then(() => { this.#createWindow(); eventHandler() })

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

	start () { this.#appEventHandler() }
}

module.exports = { AppStart }