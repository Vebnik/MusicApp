// Imports
import axios from "axios"


// Logic
const getMusic = async (title) => {
	const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=11&_page=1')

	return res
}

const changePage = async (limit = 11, page = 1) => {

	const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
		params: {
			_limit: limit,
			_page: page
		}
	})

	return res
}

export { getMusic, changePage }

