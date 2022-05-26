import React from 'react';
import NavMenu from "../components/NavMenu";

const StaticPage = ({children, page}) => {
	return (
		<div className={'StaticPage'}>
			<NavMenu setPage={page}/>
			<div className={'divider'} > </div>
			{children}
		</div>
	)
}

export default StaticPage;