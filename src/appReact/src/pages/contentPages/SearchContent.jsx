import React from 'react';
import SongElement from "../../components/songElement";


const SearchContent = () => {

	const testSong = {
		id: 1,
		title: 'Test name song - Nice super song',
		duration: '04:43 ⏰'
	}

	return (
		<div className={'SearchContent'}>
			<div className={'search'}>
				<form>
					<input className={'MyInput'}/>
					<button className={'submitForm'}>
						Search <i className={'fa fa-globe'}> </i>
					</button>
				</form>
			</div>
			<div className={'dividerSearch'}> </div>
			<div className={'SearchList'}>
				<SongElement title={testSong.title} duration={testSong.duration}/>
				<SongElement title={testSong.title} duration={testSong.duration}/>
				<SongElement title={testSong.title} duration={testSong.duration}/>
				<SongElement title={testSong.title} duration={testSong.duration}/>
				<SongElement title={testSong.title} duration={testSong.duration}/>
				<SongElement title={testSong.title} duration={testSong.duration}/>
				<SongElement title={testSong.title} duration={testSong.duration}/>
				<SongElement title={testSong.title} duration={testSong.duration}/>
				<SongElement title={testSong.title} duration={testSong.duration}/>
				<SongElement title={testSong.title} duration={testSong.duration}/>
				<SongElement title={testSong.title} duration={testSong.duration}/>
			</div>
		</div>
	);
};

export default SearchContent;