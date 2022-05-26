import React from 'react';
import SongElAllButton from "./songElAllButton";

const SongElemAllContent = (props) => {

	const { title, duration, id } = props.dataSong

	return (
		<div className={'SongElement'}>
			<span>{title}</span>
			<span>{duration} sec </span>
			<SongElAllButton id={id} />
		</div>
	)
}

export default SongElemAllContent;