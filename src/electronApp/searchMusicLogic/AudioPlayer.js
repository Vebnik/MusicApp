import {nodePath} from "../../appReact/src/utils/ipcBridgeLogic/YtSearchMusic";


const playerConfig = {}

export class Player {

	#songId

	constructor (id)  {
		this.#songId = id

		console.log(playerConfig)

		if (!this.#isPlayed()) {
			Player.#getPath(id).then(path => {
				playerConfig[id] = {
					player: new Audio(path),
					played: false
				}
			})
		}
	}

	static async #getPath  (id) {
		return await nodePath(['localDb', `${id}.mp3`])
		//return `E:\\Project\\nodeAppProject\\react-app-music\\localDb\\${id}.mp3`
	}

	#isPlayed () {
		if (playerConfig[this.#songId]?.player) {
			return playerConfig[this.#songId].played
		}
		return false
	}


	play () {
		if (this.#isPlayed()) {
			playerConfig[this.#songId].player.pause()
			playerConfig[this.#songId].played = false
		} else {
			playerConfig[this.#songId].player.play()
				.then(() => playerConfig[this.#songId].played = true)
				.catch(err => console.error(err))
		}
	}
}