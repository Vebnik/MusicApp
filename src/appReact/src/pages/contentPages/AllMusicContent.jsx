import React, {useState} from 'react';
import SearchInput from "../../components/searchInput";
import SongElement from "../../components/songElement";

const AllMusicContent = () => {

	const [list, setList] = useState([])
	const [song, setSong] = useState([])
	const [count, countSong] = useState([1])


	const listenPage = (ev) => {
		const page = ev.target.innerText-1
		setSong([...list[page]])
	}

	const getSong = (title) => {
		console.log(title)

	}

	return (
		<div className={'SearchContent'}>
			<SearchInput getSong={getSong}/>
			<div className={'dividerSearch'}> </div>
			<div className={'SearchList'}>
				{ song.map((el, i) => i < 11 ? <SongElement dataSong={el}/> : null ) }
			</div>
			<div className={'PagList'}>
				{ count.map(el => <button onClick={ev => listenPage(ev)} className={'PagListBtn'} key={el} >{el}</button> ) }
			</div>
		</div>
	);
};

export default AllMusicContent;