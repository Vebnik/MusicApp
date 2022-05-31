import React, {useState} from 'react';
import { Link } from "react-router-dom";
import AudioPlayer  from 'react-h5-audio-player';
import FavoriteContent from "../pages/contentPages/FavoriteContent";
import AllMusicContent from "../pages/contentPages/AllMusicContent";
import SettingContent from "../pages/contentPages/SettingContent";
import SearchContent from "../pages/contentPages/SearchContent";


const NavMenu = ({setPage, myRoutes, pageCurrent, currentSong, setSong}) => {

	const [currentNav, setCurrent] = useState()

	const editSelect = (ev) => setCurrent(ev)
	const onClickSearch = () => {
		editSelect(0)
		setPage('search')
		myRoutes(<SearchContent/>)
	}
	const onClickAllMusic = async () => {
		editSelect(2)
		await myRoutes(<AllMusicContent getPages={pageCurrent} setSong={setSong} />)
		await setPage('allMusic')
	}


	return (
		<div className={'NavMenu'}>
			<div className={'NavMenuButtons'}>
				<div className={`NavButton ${currentNav === 0 ? 'current' : 'empty'}`} onClick={onClickSearch}>
					Search Music<i className={'fa fa-search'}> </i>
				</div>
				<div className={`NavButton ${currentNav === 1 ? 'current' : 'empty'}`} onClick={() => editSelect(1)}>
					<Link to='/favorite'>Favorite Music</Link> <i className={'fa fa-star'}> </i>
				</div>
				<div className={`NavButton ${currentNav === 2 ? 'current' : 'empty'}`} onClick={onClickAllMusic}>
					All Music<i className={'fa fa-music'}> </i>
				</div>
				<div className={'SpaceDivide'}> </div>
				<AudioPlayer className={'MyPlayer'} src={currentSong}/>
				<div className={`NavButton ${currentNav === 3 ? 'current' : 'empty'}`} onClick={() => editSelect(3)}>
					<Link to='/settings'>Settings</Link> <i className={'fa fa-gears'}> </i>
				</div>
			</div>
		</div>
	)
}

export default NavMenu;