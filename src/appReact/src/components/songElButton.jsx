import React from 'react';
import { loadMusic } from '../utils/ipcBridgeLogic/YtSearchMusic'


const SongElButton = (props, {}) => {

	const { url } = props
	const download = () => loadMusic(url)

	return (
		<div>
			<div className={'songContext'}>
				<i className={'fa fa-download'} onClick={download}> </i>
			</div>
		</div>
	)
}

export default SongElButton;