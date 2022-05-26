import React from 'react';
import { loadMusic } from '../utils/musicLogic/YtSearchMusic'


const SongElButton = (props, {}) => {

	const { url } = props
	const download = () => loadMusic(url)

	//<i className={'fa fa-music'}> </i>
	// <i className={'fa fa-play'} onClick={player}> </i>
	// <i className={'fa fa-star'}> </i>

	return (
		<div>
			<div className={'songContext'}>
				<i className={'fa fa-download'} onClick={download}> </i>
			</div>
		</div>
	)
}

export default SongElButton;