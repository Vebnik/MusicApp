import {nodePath} from "../../appReact/src/utils/ipcBridgeLogic/YtSearchMusic";


export const GetPath = async (id) => {
	console.log(id)
	return await nodePath(id)
}