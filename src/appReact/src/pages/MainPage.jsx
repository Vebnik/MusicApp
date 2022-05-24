import React from 'react';
import NavMenu from "../components/NavMenu";
import Content from "../components/Content";

const MainPage = () => {
	return (
		<div className={'MainPage'}>
			<NavMenu/>
			<Content/>
		</div>
	)
}

export default MainPage;