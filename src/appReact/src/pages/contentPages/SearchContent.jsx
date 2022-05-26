import React, {useState} from 'react';
import SongElement from "../../components/songElement";
import SearchInput from "../../components/searchInput";
import { getPage } from "../../utils/otherLogic/getPage";
import { getMusic } from "../../utils/musicLogic/YtSearchMusic";


const SearchContent = () => {

	const [list, setList] = useState([])
	const [count, setCount] = useState([1])
	const [song, setSong] = useState([])

	const getSong = (title) => {

		setCount([0])
		setSong([])

		getMusic(title).then(data => {
			setCount(getPage(data.length))
			setSong([...data[0]])
			setList([...data])
		})

	}

	const listenPage = (ev) => {
		const page = ev.target.innerText-1
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