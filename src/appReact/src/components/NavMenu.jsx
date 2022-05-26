import React, {useState} from 'react';
import { Link } from "react-router-dom";

const NavMenu = ({setPage}) => {

	const [currentNav, setCurrent] = useState()

	const editSelect = (ev) => setCurrent(ev)

	return (
		<div className={'NavMenu'}>
			<div className={'NavMenuButtons'}>
				<div className={`NavButton ${currentNav === 0 ? 'current' : 'empty'}`} onClick={() => { editSelect(0); setPage('search') }}>
					<Link to='/search'>Search Music</Link> <i className={'fa fa-search'}> </i>
				</div>
				<div className={`NavButton ${currentNav === 1 ? 'current' : 'empty'}`} onClick={() => editSelect(1)}>
					<Link to='/favorite'>Favorite Music</Link> <i className={'fa fa-star'}> </i>
				</div>
				<div className={`NavButton ${currentNav === 2 ? 'current' : 'empty'}`} onClick={() => { editSelect(2); setPage('allMusic') }}>
					<Link to='/allMusic'>All Music</Link> <i className={'fa fa-music'}> </i>
				</div>
				<div className={'SpaceDivide'}> </div>
				<div className={`NavButton ${currentNav === 3 ? 'current' : 'empty'}`} onClick={() => editSelect(3)}>
					<Link to='/settings'>Settings</Link> <i className={'fa fa-gears'}> </i>
				</div>
			</div>
		</div>
	)
}

export default NavMenu;