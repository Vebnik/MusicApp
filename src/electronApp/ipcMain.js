const { ipcMain, dialog } = require('electron')
const { getMusicSrc, getRes } = require('./searchMusicLogic/YtSearch')

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

	})
}


module.exports = { eventHandler }