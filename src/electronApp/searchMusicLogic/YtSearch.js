const ytsr = require('ytsr')
const ytdl = require('ytdl-core')
const fs = require('fs')
const path = require('path')


const checkDir = () => {

}

const saveDb = async (songModel) => {

	console.log(songModel)

	const dbPath = path.join('localDb', 'musicDb.json')

	await fs.readFile(dbPath, 'utf-8' ,(err, data) => {
		if (err) {

			fs.mkdir(path.join('localDb'), (err) => {})
			fs.writeFile(dbPath, JSON.stringify([songModel], '', '  '), (err) => {})

		} else {
			const newData = JSON.parse(data)
			newData.push(songModel)

			fs.writeFile(dbPath, JSON.stringify(newData, '', '  '), (err) => {})
		}
	})
}

const getMusicSrc = (url) => {

	console.log('Start download in back')

	ytdl.getInfo(url).then(async info => {

		const songModel = {
			id: info.videoDetails.channelId,
			title: info.videoDetails.title,
			url: info.videoDetails.video_url
		}
		const pathSave = path.join('localDb', `${songModel.id}.mp4`)

		await saveDb(songModel)
			.then(() => {
				ytdl.downloadFromInfo(info, {filter: 'audio', quality: 'highestaudio'})
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

//saveDb({id: 'asad-43534-dsfsf', title: 'test', url: 'http://localhost'}).catch(err => console.error(err))
module.exports = { getRes, getMusicSrc }