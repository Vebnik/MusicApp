import React from 'react';
import SongElButton from "./songElButton";

const SongElement = (props) => {

	const { title, dur } = props.dataSong

	return (
		<div className={'SongElement'}>
			<span>{title}</span>
			<span>{dur} min </span>
			<SongElButton />
		</div>
	)
}

export default SongElement;