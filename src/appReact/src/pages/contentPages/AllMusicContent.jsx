import React, {useState} from 'react';
import SearchInput from "../../components/searchInput";
import {loadLocalMusic} from "../../utils/ipcBridgeLogic/YtSearchMusic";
import {getPage} from "../../utils/otherLogic/getPage";
import SongElemAllContent from "../../components/songElemAllContent";
import BtnLoadMusic from "../../components/BtnLoadMusic";


const AllMusicContent = ({getPages, setSong}) => {

	const [list, setList] = useState([])
	const [song, setSongs] = useState([])
	const [count, setCount] = useState([1])


	const listenPage = (ev) => {
		const page = ev.target.innerText-1
		setSongs([...list[page]])
	}

	const getSong = (title) => console.log(title)

	const getLocalMusic = (ev) => {
		ev.preventDefault()
		loadLocalMusic().then(data => {
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
				{ song.map((el, i) => i < 11 ? <SongElemAllContent dataSong={el} setSong={setSong}/> : null ) }
			</div>
			<div className={'PagList'}>
				{ count.map(el => <button onClick={ev => listenPage(ev)} className={'PagListBtn'} key={el} >{el}</button> ) }
			</div>
		</div>
	);
};

export default AllMusicContent;