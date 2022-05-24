import React from 'react';
import NavMenu from "../components/NavMenu";

const StaticPage = ({children}) => {
	return (
		<div className={'StaticPage'}>
			<NavMenu/>
			<div className={'divider'}> </div>
			{children}
		</div>
	)
}

export default StaticPage;