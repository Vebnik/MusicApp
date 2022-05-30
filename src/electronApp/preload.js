const { contextBridge, ipcRenderer } = require('electron')


contextBridge.exposeInMainWorld('electronAPI',{
	testApi: (path) => ipcRenderer.invoke('dialog:test', path),
	getMusic: (query) => ipcRenderer.invoke('dialog:getMusic', query),
	loadMusic: (url) => ipcRenderer.invoke('dialog:getStreamMusic', url),
	loadLocalMusic: () => ipcRenderer.invoke('dialog:getLocalMusic'),
	nodePath: (path) => ipcRenderer.invoke('dialog:path', path),
})

contextBridge.exposeInMainWorld('backendYt', {
	searchLocalMusic: (title) => ipcRenderer.invoke('dialog:search', title)
})

contextBridge.exposeInMainWorld('windowDrive', {
	minimize: () => ipcRenderer.invoke('dialog:minWindow'),
	close: () => ipcRenderer.invoke('dialog:closeWindow'),
})