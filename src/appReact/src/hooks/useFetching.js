import {useState} from "react";

export const UseFetching = (callback) => {

	const [isLoad, setLoad] = useState(false)

	const fetching = async () => {
		try {
			setLoad(true)
			await callback()

		} catch (e) {

		} finally {
			setLoad(false)
		}
	}

	return [fetching, isLoad]

}
