import React from 'react';
import {AudioPlayer, Player} from "../../../electronApp/searchMusicLogic/AudioPlayer";


const SongElAllButton = (props) => {

	const { id } = props

	const playAudio = () => {
		console.log('Try to start music')

		const player = new Player(id)
		player.play()

		//AudioPlayer(id)
	}

	return (
		<div>
			<div className={'songContext'}>
				<i className={'fa fa-play'} onClick={playAudio}> </i>
				<i className={'fa fa-star'}> </i>
				<i className={'fa fa-video'}> </i>
			</div>
		</div>
	)
}

export default SongElAllButton;