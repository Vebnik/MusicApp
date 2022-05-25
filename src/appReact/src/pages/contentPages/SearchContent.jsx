import React, {useState} from 'react';
import SongElement from "../../components/songElement";
import SearchInput from "../../components/searchInput";
import {getPage} from "../../utils/getPage";
import { searchMusic } from "../../utils/parsingMusic";


const SearchContent = () => {

	const [list, setList] = useState([])
	const [count, setCount] = useState([1])
	const [song, setSong] = useState([])
	const [currentPage, setPage] = useState(0)

	const getSong = (title) => {

		setCount([0])
		setSong([])
		setPage(0)

		searchMusic(title).then(data => {
			setCount(getPage(data.length))
			setSong([...data[0]])
			setList([...data])
		})

	}

	const listenPage = (ev) => {

		const page = ev.target.innerText-1

		console.log(list[page])

		setSong([...list[page]])
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
	)
}

export default SearchContent;