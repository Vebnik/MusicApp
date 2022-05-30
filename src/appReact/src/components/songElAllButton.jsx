import React from 'react';
import { GetPath } from "../../../electronApp/searchMusicLogic/AudioPlayer";
import {deleteLocalMusic} from "../utils/ipcBridgeLogic/YtSearchMusic";



const SongElAllButton = (props) => {

	const { id } = props

	const localAudio = () => {
		GetPath(id).then(async path => {
			await props.setSong(path)
		})
	}

	const deleteAudio = () => {
		deleteLocalMusic(id).then(nxt => {
			console.log('deleted')
		})
	}

	return (
		<div>
			<div className={'songContext'}>
				<i className={'fa fa-play'} onClick={localAudio}> </i>
				<i className={'fa fa-star'}> </i>
				<i className={'fa fa-trash'} onClick={deleteAudio}> </i>
			</div>
		</div>
	)
}

export default SongElAllButton;