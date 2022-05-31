import React, {useState} from 'react';
import NavMenu from "../components/NavMenu";
import Loader from "../Loader/Loader";

const StaticPage = ({children, page, myRoutes, pageCurrent}) => {

	const [currentSong, setSong] = useState()

	return (
		<div className={'StaticPage'}>
			<NavMenu setPage={page} myRoutes={myRoutes} pageCurrent={pageCurrent} currentSong={currentSong} setSong={setSong} />
			<div className={'divider'} > </div>
			{children}
		</div>
	)
}

export default StaticPage;