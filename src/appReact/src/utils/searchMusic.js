// Imports
import axios from "axios"


// Logic
const getMusic = async (title) => {
	const res = await axios.get('https://jsonplaceholder.typicode.com/posts')

	return res
}

export { getMusic }

