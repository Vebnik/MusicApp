

// Logic electron api ipc
export const getMusic = async (title) => {
	return await window.electronAPI.getMusic(title)
}

export const loadMusic = async (url) => {
	await window.electronAPI.loadMusic(url)
		.then(() => console.log('Start download'))
}

export const loadLocalMusic = async () => {
	return await window.electronAPI.loadLocalMusic()
}

export const nodePath = async (path) => {
	return await window.electronAPI.nodePath(path)
}