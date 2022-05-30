import React, {useState} from 'react';

const SearchInput = ({getSong, children}) => {

	const [title, setTitle] = useState('')

	const searchSong = (ev) => {
		ev.preventDefault()
		getSong(title)
		setTitle('')
	}

	return (
		<div className={'search'}>
			<form>
				{children}
				<input className={'MyInput'} value={title} onChange={(e) => setTitle(e.target.value)}/>
				<button className={'submitForm'} onClick={searchSong}>
					Search <i className={'fa fa-globe'}> </i>
				</button>
			</form>
		</div>
	)
}

export default SearchInput;