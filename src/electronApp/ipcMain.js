const { ipcMain, dialog } = require('electron')
const { getMusicSrc, getRes, getLocalMusic } = require('./searchMusicLogic/YtSearch')
const { nodePath } = require('./utils/nodePath')
const {MessageChannelMain} = require('electron')
const webContents = require('electron')

const eventHandler = () => {

	ipcMain.handle('dialog:getMusic', async (event, args) => {
		const prom = new Promise(resolve => {
			console.log('Start exec')
			getRes(args).then(data => {
				console.log('Process exec')
				resolve(data)
			})
		})

		await Promise.all([prom])
		console.log('End exec')
		return prom
	})

	ipcMain.handle('dialog:getStreamMusic', async (event, args) => {
		getMusicSrc(args)
	})

	ipcMain.handle('dialog:getLocalMusic', async (event, args) => {
		const prom = new Promise(resolve => {
			getLocalMusic().then(data => { resolve(data) })
		})

		await Promise.all([prom])
		return await prom
	})

	ipcMain.handle('dialog:path', async (event, args) => {
		return nodePath(args)
	})

	ipcMain.handle('dialog:test', async (event, args) => {
		const { port1, port2 } = new MessageChannelMain()

		webContents.postMessage('port', { message: args }, [port1])
	})
}



module.exports = { eventHandler }