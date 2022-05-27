const ytsr = require('ytsr')
const ytdl = require('ytdl-core')
const fs = require('fs')
const path = require('path')
const {v4: uuidv4} = require('uuid')


// Utils
const mkDir = () => {
	fs.mkdir(path.join('localDb'), (err) => {})
}

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
	const dbPath = path.join('localDb', 'musicDb.json')

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
		const pathSave = path.join('localDb', `${songModel.id}.mp3`)

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
						title: el.title.slice(0, 60),
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
	const dbPath = path.join('localDb', 'musicDb.json')
	return await read(dbPath)
}


module.exports = { getRes, getMusicSrc, getLocalMusic  }