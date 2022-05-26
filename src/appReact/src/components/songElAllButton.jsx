import React from 'react';


const SongElAllButton = (props) => {

	const { path } = props

	const playAudio = () => {
		const player = new Audio(path)

		player.play()
			.then(() => console.log('Start playing'))
			.catch(err => console.log(err))
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