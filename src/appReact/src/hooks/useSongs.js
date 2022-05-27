import {useState} from "react";

export const useSongs = (callback) => {

	const [currentSong, setSong] = useState('')

	const setter = async (song) => {
		setSong(song)
	}

	return [currentSong, setter]

}
