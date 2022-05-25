import axios from "axios";


const parsHtml = (strHtml) => {

	const regExp = {
		patternEl: /<div class="track-item([\s\S]+?)>/g,
		patternUrl: /data-track="([\s\S]+?)"/,
		patternTitle: /data-title="([\s\S]+?)"/,
		patternDur: /<div class="track-time">([\s\S]+?)<\/div>/g,
		patternDurNotG: /<div class="track-time">([\s\S]+?)<\/div>/
	}


	return strHtml.match(regExp.patternEl).map((el, i) => {
		return {
			url: `https:${el.match(regExp.patternUrl)[1]}`,
			title: el.match(regExp.patternTitle)[1],
			dur: strHtml.match(regExp.patternDur)[i].match(regExp.patternDurNotG)[1]
		}
	})

}

const get = async (url, title) => {

	return new Promise(res => {
		axios.post(url, `do=search&subaction=search&story=${title}`, {
			headers: {"content-type": "application/x-www-form-urlencoded"}
		}).then(axRes => {
			if (axRes.status < 400) res(axRes.data)
		})
	})

}

export const searchMusic = async (title) => {

	const trueSrc = 'https://mp3uks.ru/'

	get(trueSrc, title).then(data => {

		return parsHtml(data)
	})

}
