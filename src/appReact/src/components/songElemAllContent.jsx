import React from 'react';
import SongElAllButton from "./songElAllButton";

const SongElemAllContent = (props) => {

	const { title, dur, path } = props.dataSong

	return (
		<div className={'SongElement'}>
			<span>{title}</span>
			<span>{dur} min </span>
			<SongElAllButton path={path} />
		</div>
	)
}

export default SongElemAllContent;