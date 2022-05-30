import React from 'react';

const BtnLoadMusic = ({getLocalMusic}) => {
	return (
		<button className={'submitForm'} onClick={getLocalMusic}>
			Load Music <i className={'fa fa-cloud'}> </i>
		</button>
	);
};

export default BtnLoadMusic;