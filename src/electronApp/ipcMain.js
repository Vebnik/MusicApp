const { ipcMain, dialog } = require('electron')
const { getMusicSrc, getRes, getLocalMusic, searchLocal, nodePath } = require('./searchMusicLogic/YtSearch')


const eventHandler = () => {

	// ytdl core backend
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

	ipcMain.handle('dialog:search', async (event, args) => {
		await console.log(args, 'in Handle')
		return await searchLocal(args)
	})

}



module.exports = { eventHandler }