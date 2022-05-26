import React from 'react';
import SongElButton from "./songElButton";

const SongElement = (props) => {

	const { title, dur, url } = props.dataSong

	return (
		<div className={'SongElement'}>
			<span>{title}</span>
			<span>{dur} min </span>
			<SongElButton url={url} />
		</div>
	)
}

export default SongElement;