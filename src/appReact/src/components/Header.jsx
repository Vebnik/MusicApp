import React from 'react';
import { minCloseWin } from '../utils/ipcBridgeLogic/YtSearchMusic'


const Header = () => {
	return (
		<div className={'Header'}>
			<div className={'HeaderDrag'}> </div>
			<div className={'HeaderBtn'} onClick={() => minCloseWin('')}><i className={'fa fa-window-minimize'}> </i></div>
			<div> </div>
			<div className={'HeaderBtn'} onClick={() => minCloseWin('close')}><i className={'fa fa-window-close'}> </i></div>
		</div>
	)
}

export default Header