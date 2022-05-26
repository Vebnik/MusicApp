import React from 'react';
import {AudioPlayer} from "../utils/musicLogic/AudioPlayer";


const SongElButton = (props, {}) => {

	const { url } = props
	const player = () => AudioPlayer(url)

	return (
		<div>
			<div className={'songContext'}>
				<i className={'fa fa-music'}> </i>
				<i className={'fa fa-play'} onClick={player}> </i>
				<i className={'fa fa-star'}> </i>
			</div>
		</div>
	)
}

export default SongElButton;