import React, {useState} from 'react';
import SearchInput from "../../components/searchInput";
import {loadLocalMusic, searchLocalMusic} from "../../utils/ipcBridgeLogic/YtSearchMusic";
import {getPage} from "../../utils/otherLogic/getPage";
import SongElemAllContent from "../../components/songElemAllContent";
import BtnLoadMusic from "../../components/BtnLoadMusic";
import Loader from "../../Loader/Loader";


const AllMusicContent = ({setSong}) => {

	const [list, setList] = useState([])
	const [song, setSongs] = useState([])
	const [count, setCount] = useState([1])
	const [isLoading, setLoading] = useState(false)


	const listenPage = (ev) => {
		const page = ev.target.innerText-1
		setSongs([...list[page]])
	}

	const getSong = (title) => {
		setLoading(true)

		searchLocalMusic(title).then(data => {
			setLoading(false)

			setCount(getPage(data.length))
			setSongs([...data[0]])
			setList([...data])
		})
	}

	const getLocalMusic = (ev) => {
		setLoading(true)
		ev.preventDefault()
		loadLocalMusic().then(data => {
			setLoading(false)
			setCount(getPage(data.length))
			setSongs([...data[0]])
			setList([...data])
		})
	}


	return (
		<div className={'SearchContent'} >
			<SearchInput getSong={getSong}>
				<BtnLoadMusic getLocalMusic={getLocalMusic}/>
			</SearchInput>
			<div className={'dividerSearch'}> </div>
			<div className={'SearchList'}>
				{ isLoading ? <Loader /> : song.map((el, i) => i < 11 ? <SongElemAllContent dataSong={el} setSong={setSong}/> : null ) }
			</div>
			<div className={'PagList'}>
				{ count.map(el => <button onClick={ev => listenPage(ev)} className={'PagListBtn'} key={el} >{el}</button> ) }
			</div>
		</div>
	)
}

export default AllMusicContent;