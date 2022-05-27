import {nodePath} from "../../appReact/src/utils/ipcBridgeLogic/YtSearchMusic";


export const GetPath = async (id) => {
	return nodePath(['localDb', `${id}.mp3`])
}