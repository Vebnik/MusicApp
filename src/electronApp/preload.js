const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI',{
	testApi: () => ipcRenderer.invoke('dialog:test'),
	getMusic: (query) => ipcRenderer.invoke('dialog:getMusic', query),
	loadMusic: (url) => ipcRenderer.invoke('dialog:getStreamMusic', url),
})