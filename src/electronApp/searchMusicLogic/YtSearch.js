const ytsr = require('ytsr')
const ytdl = require('ytdl-core')
const fs = require('fs')



const getMusicSrc = (url) => {

	console.log('Start download in back')

	ytdl.getInfo(url).then(info => {

		ytdl.downloadFromInfo(info, {filter: 'audio', quality: 'highestaudio'})
			.pipe(fs.createWriteStream(`${info.videoDetails.title}.mp4`, 'utf-8'))

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


module.exports = { getRes, getMusicSrc }