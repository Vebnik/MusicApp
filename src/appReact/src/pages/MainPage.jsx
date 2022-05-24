import React from 'react';
import NavMenu from "./NavMenu";
import Content from "./Content";

const MainPage = () => {
	return (
		<div className={'MainPage'}>
			<NavMenu/>
			<Content/>
		</div>
	)
}

export default MainPage;