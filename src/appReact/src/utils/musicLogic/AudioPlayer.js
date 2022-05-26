
const player = {
	audio: null,
	playerId: null,
	isPlayed: false,
}

export const AudioPlayer = (url) => {

	console.log('Exec player', url)

	if (player.audio) {
		console.log('Try pause')

		if (player.playerId === url) {

			if (player.isPlayed) {
				player.isPlayed = false
				return player.audio.pause()
			} else {
				return player.audio.play()
					.then(() => player.isPlayed = true)
			}

		}

		player.audio.pause()
		player.playerId = url
		player.audio = new Audio(url)
		return player.audio.play()
			.then(() => player.isPlayed = true)
	}

	if (!player.audio) {
		console.log('Try start')

		player.playerId = url
		player.audio = new Audio(url)
		return player.audio.play()
			.then(() => player.isPlayed = true)
	}
}