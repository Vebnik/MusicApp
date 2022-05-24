import React from 'react';

const SearchContent = () => {
	return (
		<div className={'SearchContent'}>
			<div className={'search'}>
				<form>
					<input className={'MyInput'}/>
					<button className={'submitForm'}>
						Search <i className={'fa fa-globe'}> </i>
					</button>
				</form>
			</div>
			<div className={'dividerSearch'}> </div>
			<div className={'SearchList'}> </div>
		</div>
	);
};

export default SearchContent;