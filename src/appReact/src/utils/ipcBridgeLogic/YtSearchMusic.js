

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

export const nodePath = async (id) => {
	return window.electronAPI.nodePath(id)
}

export const testLogic = async (path) => {
	await window.electronAPI.testApi(path)
}

export const searchLocalMusic = async (title) => {
	return await window.backendYt.searchLocalMusic(title)
}

export const deleteLocalMusic = async (id) => {
	return await window.electronAPI.deleteMusic(id)
}

export const minCloseWin = (ev) => {
	ev === 'close' ?  window.windowDrive.close()
		: window.windowDrive.minimize()
}
