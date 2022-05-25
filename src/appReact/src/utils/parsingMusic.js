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
			title: el.match(regExp.patternTitle)[1].length > 55 ?
				el.match(regExp.patternTitle)[1].slice(0 , 55)
				: el.match(regExp.patternTitle)[1],
			dur: strHtml.match(regExp.patternDur)[i].match(regExp.patternDurNotG)[1]
		}
	})

}

const get = async (url, title) => {

	const headers  = {
		"Accept": "application/json",
		"Access-Control-Allow-Origin": "*",
		"X-Requested-With": "XMLHttpRequest",
		"Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
		"Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
		"content-type": "application/x-www-form-urlencoded",
	}

	return new Promise(res => {
		axios.post(url, `do=search&subaction=search&story=${title}`, {
			headers: headers
		}).then(axRes => {
			if (axRes.status < 400) res(axRes.data)
		})
	})

}

export const searchMusic = async (title) => {
	return new Promise(resolve => {
		get('https://mp3uks.ru/', title).then(data => {

			const divideArr = (arr) => {

				const tmpArr = []
				for (let i = 0; i <= arr.length; i+=11) tmpArr.push(arr.slice(i, i+11))
				return tmpArr

			}

			resolve(divideArr(parsHtml(data)))
		})
	})
}
