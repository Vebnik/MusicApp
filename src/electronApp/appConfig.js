// Import
const path = require("path");
const { BrowserWindow, app, ipcMain} = require("electron");
const { eventHandler } = require('./ipcMain')

// Logic
class AppStart {

	#paths = {
		root: process.env.ENTRY_RENDER || null,
		devRoot: 'http://localhost:3000',
		build: 'dev'
	}
	#win

	constructor(build) {
		this.#paths.build = build
	}


	// Methods
	#createWindow () {
		this.#win = new BrowserWindow({
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
			this.#win.loadFile(this.#paths.root)
				.catch(err => console.error(err))
		} else {
			this.#win.loadURL(this.#paths.devRoot)
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

	#mainWindowEvent() {
		// windowDrive
		ipcMain.handle('dialog:closeWindow', async (event) => {
			app.quit()
		})

		ipcMain.handle('dialog:minWindow', async (event) => {
			this.#win.minimize()
		})
	}

	start () { this.#appEventHandler(); this.#mainWindowEvent() }
}

module.exports = { AppStart, app }