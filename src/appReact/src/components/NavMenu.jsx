import React from 'react';

const NavMenu = () => {
	return (
		<div className={'NavMenu'}>
			<div className={'NavMenuButtons'}>
				<div className={'NavButton'}>Search Music <i className={'fa fa-search'}> </i></div>
				<div className={'NavButton'}>Favorite Music <i className={'fa fa-star'}> </i></div>
				<div className={'NavButton'}>All Music <i className={'fa fa-music'}> </i></div>
				<div className={'SpaceDivide'}> </div>
				<div className={'NavButton'}>Settings <i className={'fa fa-gears'}> </i></div>
			</div>
		</div>
	)
}

export default NavMenu;