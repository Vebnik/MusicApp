import React from 'react';
import SongElButton from "./songElButton";

const SongElement = (props) => {

	const { title, duration } = props.dataSong

	return (
		<div className={'SongElement'}>
			<span>{title}</span>
			<span>{duration} min </span>
			<SongElButton />
		</div>
	)
}

export default SongElement;