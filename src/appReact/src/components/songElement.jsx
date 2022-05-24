import React from 'react';

const SongElement = (props) => {

	const { id, title, duration } = props

	return (
		<div className={'SongElement'}>
			<i>{title} {duration}</i>
		</div>
	)
}

export default SongElement;