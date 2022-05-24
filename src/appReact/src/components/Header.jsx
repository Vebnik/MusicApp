import React from 'react';

const Header = () => {
	return (
		<div className={'Header'}>
			<div className={'HeaderDrag'}> </div>
			<div className={'HeaderBtn'}><i className={'fa fa-window-minimize'} > </i></div>
			<div> </div>
			<div className={'HeaderBtn'}><i className={'fa fa-window-close'}> </i></div>
		</div>
	)
}

export default Header