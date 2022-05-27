import React from 'react';
import { GetPath } from "../../../electronApp/searchMusicLogic/AudioPlayer";


const SongElAllButton = (props) => {

	const { id } = props

	const localAudio = () => {
		GetPath(id).then(async path => {
			await props.setSong(path)
		})
	}

	return (
		<div>
			<div className={'songContext'}>
				<i className={'fa fa-play'} onClick={localAudio}> </i>
				<i className={'fa fa-star'}> </i>
				<i className={'fa fa-video'}> </i>
			</div>
		</div>
	)
}

export default SongElAllButton;