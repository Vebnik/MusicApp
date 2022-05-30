const { contextBridge, ipcRenderer } = require('electron')


contextBridge.exposeInMainWorld('electronAPI',{
	testApi: (path) => ipcRenderer.invoke('dialog:test', path),
	getMusic: (query) => ipcRenderer.invoke('dialog:getMusic', query),
	loadMusic: (url) => ipcRenderer.invoke('dialog:getStreamMusic', url),
	loadLocalMusic: () => ipcRenderer.invoke('dialog:getLocalMusic'),
	nodePath: (id) => ipcRenderer.invoke('dialog:path', id),
	deleteMusic: (id) => ipcRenderer.invoke('dialog:deleteLocalMusic', id)
})

contextBridge.exposeInMainWorld('backendYt', {
	searchLocalMusic: (title) => ipcRenderer.invoke('dialog:search', title)
})

contextBridge.exposeInMainWorld('windowDrive', {
	minimize: () => ipcRenderer.invoke('dialog:minWindow'),
	close: () => ipcRenderer.invoke('dialog:closeWindow'),
})