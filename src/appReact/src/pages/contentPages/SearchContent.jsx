import React, {useState} from 'react';
import SongElement from "../../components/songElement";
import SearchInput from "../../components/searchInput";
import { getPage } from "../../utils/otherLogic/getPage";
import { getMusic } from "../../utils/ipcBridgeLogic/YtSearchMusic";
import Loader from "../../Loader/Loader";


const SearchContent = () => {

	const [list, setList] = useState([])
	const [count, setCount] = useState([0])
	const [song, setSong] = useState([])
	const [isLoading, setLoading] = useState(false)

	const getSong = (title) => {

		setLoading(true)
		setCount([0])
		setSong([])

		getMusic(title).then(data => {
			setLoading(false)
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
				{ isLoading ? <Loader /> : song.map((el, i) => i < 11 ? <SongElement dataSong={el}/> : null ) }
			</div>
			<div className={'PagList'}>
				{ count.map(el => <button onClick={ev => listenPage(ev)} className={'PagListBtn'} key={el} >{el}</button> ) }
			</div>
		</div>
	)
}


export default SearchContent;