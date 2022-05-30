import React from 'react';
import SongElAllButton from "./songElAllButton";


const SongElemAllContent = (props) => {

	const { title, duration, id } = props.dataSong

	return (
		<div className={'SongElement'}>
			<span>{title}</span>
			<span><i className={'fa fa-clock'}/> {(duration/60).toFixed(1)} Min</span>
			<SongElAllButton id={id} setSong={props.setSong}/>
		</div>
	)
}

export default SongElemAllContent;