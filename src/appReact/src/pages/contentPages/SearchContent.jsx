import React, {useState} from 'react';
import SongElement from "../../components/songElement";
import SearchInput from "../../components/searchInput";
import {getMusic} from "../../utils/searchMusic";
import PaginationList from "../../components/paginationList";

const SearchContent = () => {


	const getSong = (title) => {
		getMusic(title).then(res => {
			setSong([...song, ...res.data])
		})
	}

	const [song, setSong] = useState([])

	return (
		<div className={'SearchContent'}>
			<SearchInput getSong={getSong}/>
			<div className={'dividerSearch'}> </div>
			<div className={'SearchList'}>
				{song.map((el, i) => i < 10 ? <SongElement dataSong={el}/> : null )}
			</div>
			<PaginationList />
		</div>
	)
}

export default SearchContent;