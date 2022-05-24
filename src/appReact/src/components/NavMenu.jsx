import React from 'react';
import { Link } from "react-router-dom";

const NavMenu = () => {
	return (
		<div className={'NavMenu'}>
			<div className={'NavMenuButtons'}>
				<div className={'NavButton'}>
					<Link to='/search'>Search Music</Link> <i className={'fa fa-search'}> </i>
				</div>
				<div className={'NavButton'}>
					<Link to='/favorite'>Favorite Music</Link> <i className={'fa fa-star'}> </i>
				</div>
				<div className={'NavButton'}>
					<Link to='/allMusic'>All Music</Link> <i className={'fa fa-music'}> </i>
				</div>
				<div className={'SpaceDivide'}> </div>
				<div className={'NavButton'}>
					<Link to='/settings'>Settings</Link> <i className={'fa fa-gears'}> </i>
				</div>
			</div>
		</div>
	)
}

export default NavMenu;