const ytsr = require('ytsr')
const ytdl = require('ytdl-core')
const fs = require('fs')

const getMusicSrc = (url) => {
	ytdl.getInfo(url).then(info => {

		ytdl.downloadFromInfo(info, {filter: 'audio', quality: 'highestaudio'})
			.pipe(fs.createWriteStream('test.mp4', 'utf-8'))

	})
}

const getRes = async (query) => {
	const prom = new Promise(resolve => {
		ytsr(query, {pages: 5}).then(data => {
			resolve(data.items.map(el => {
				if (el.type === 'video') {

					return {
						title: el.title,
						url: el.url,
						dur: el.duration
					}

				}
			}).filter(el => el))
		})
	})

	await Promise.all([prom])
	return prom
}
// getRes('Ганджу. Человеку нужен Человек').then(data => {
// 	console.log(data)
// })

getMusicSrc('https://www.youtube.com/watch?v=EU1XfffcqFI')