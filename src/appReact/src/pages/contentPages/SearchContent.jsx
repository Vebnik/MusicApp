import React, {useState} from 'react';
import SongElement from "../../components/songElement";
import SearchInput from "../../components/searchInput";
import {getMusic, changePage } from "../../utils/searchMusic";
import {getPage} from "../../utils/getPage";
import { searchMusic } from "../../utils/parsingMusic";


const SearchContent = () => {

	const [count, setCount] = useState([1])
	const [song, setSong] = useState([])
	const [currentPage, setPage] = useState(0)

	const getSong = (title) => {

		setCount([1])
		setSong([])

		searchMusic(title).then(data => {
			const total = data[1]

			console.log(data)

			setCount(getPage(total))
			setSong([...song, ...data[0]])
		})

	}

	const listenPage = (ev) => {
		const page = ev.target.innerText
		setPage(+page)

		console.log(currentPage)

		changePage(11, page).then(res => {
			setSong([...res.data])
		})
	}

	return (
		<div className={'SearchContent'}>
			<SearchInput getSong={getSong}/>
			<div className={'dividerSearch'}> </div>
			<div className={'SearchList'}>
				{song.map((el, i) => i < 11 ? <SongElement dataSong={el}/> : null )}
			</div>
			<div className={'PagList'}>
				{count.map(el => <button onClick={ev => listenPage(ev)} className={'PagListBtn'} key={el} >{el}</button> )}
			</div>
		</div>
	)
}

export default SearchContent;