const ytsr = require('ytsr')
const ytdl = require('ytdl-core')
const fs = require('fs')
const path = require('path')
const {v4: uuidv4} = require('uuid')
const { app } = require('electron')

// Paths
const appData = path.join(app.getPath('music'), 'appMusicElectron')


// Utils
const mkDir = () => { fs.mkdir(path.join(appData), (err) => {}) }

const write = (dbPath, songModel) => {
	fs.writeFile(dbPath, JSON.stringify(songModel, '', '  '), (err) => {})
}

const read = async (dbPath) => {
	const divideArr = (arr) => {

		const tmpArr = []
		for (let i = 0; i <= arr.length; i+=11) tmpArr.push(arr.slice(i, i+11))
		return tmpArr

	}

	const prom = new Promise(async resolve => {
		await fs.readFile(dbPath, 'utf-8' ,async (err, data) => {
			resolve(divideArr(JSON.parse(data)))
		})
	})

	await Promise.all([prom])
	return await prom
}

// Main logic
const saveDb = async (songModel) => {
	const dbPath = path.join(appData, 'musicDb.json')

	const prom = new Promise(async resolve => {
		await fs.readFile(dbPath, 'utf-8' ,async (err, data) => {
			if (err) {

				await mkDir()
				await write(dbPath, [songModel])
				resolve('new mk dir')

			} else {

				const newData = JSON.parse(data)
				newData.push(songModel)
				await write(dbPath, newData)
				resolve('new mk dir')
			}
		})
	})

	await Promise.all([prom])
	return prom
}

const getMusicSrc = (url) => {

	console.log('Start download in back')

	ytdl.getInfo(url).then(async info => {

		const songModel = {
			id: uuidv4(),
			title: info.videoDetails.title,
			url: info.videoDetails.video_url,
			duration: info.videoDetails.lengthSeconds
		}
		const format = ytdl.chooseFormat(info.formats, { quality: '140' });
		const pathSave = path.join(appData, `${songModel.id}.mp3`)

		await saveDb(songModel)
			.then(() => {
				ytdl.downloadFromInfo(info, {format: format})
					.pipe(fs.createWriteStream(pathSave, 'utf-8'))
			})
			.catch(err => console.error(err))

	})
}

const getRes = async (query) => {

	const divideArr = (arr) => {

		const tmpArr = []
		for (let i = 0; i <= arr.length; i+=11) tmpArr.push(arr.slice(i, i+11))
		return tmpArr

	}

	const prom = new Promise(resolve => {
		ytsr(query, {pages: 5}).then(data => {
			const search = data.items.map(el => {
				if (el.type === 'video') {

					return {
						title: el.title.slice(0, 50),
						url: el.url,
						dur: el.duration
					}

				}
			}).filter(el => el)
			resolve(divideArr(search))
		})
	})

	await Promise.all([prom])
	return prom
}

const getLocalMusic = async () => {

	const dbPath = path.join(appData, 'musicDb.json')
	return await read(dbPath)
}

const searchLocal = async (title) => {

	const dbPath = path.join(appData, 'musicDb.json')

	const divideArr = (arr) => {

		const tmpArr = []
		for (let i = 0; i <= arr.length; i+=11) tmpArr.push(arr.slice(i, i+11))
		return tmpArr

	}
	const prom = new Promise(async resolve => {
		await fs.readFile(dbPath, 'utf-8' ,async (err, data) => {
	 		resolve(
				divideArr(JSON.parse(data).filter(el => new RegExp(`${title}`, 'gi').test(el.title)))
			)
		})
	})

	await Promise.all([prom])
	return await prom
}

const nodePath = async (songId) => {
	return path.join(appData, `${songId}.mp3`)
}

module.exports = { getRes, getMusicSrc, getLocalMusic, searchLocal, nodePath }