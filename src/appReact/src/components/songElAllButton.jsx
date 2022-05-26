import React from 'react';
import {AudioPlayer} from "../../../electronApp/searchMusicLogic/AudioPlayer";


const SongElAllButton = (props) => {

	const { id } = props

	const playAudio = () => {
		console.log('Try to start music')
		AudioPlayer(id)
	}

	return (
		<div>
			<div className={'songContext'}>
				<i className={'fa fa-play'} onClick={playAudio}> </i>
				<i className={'fa fa-star'}> </i>
			</div>
		</div>
	)
}

export default SongElAllButton;