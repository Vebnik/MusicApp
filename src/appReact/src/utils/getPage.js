export const getPage = (totalCnt) => {
	const arrCnt = []
	for (let i = 1; i <=totalCnt; i++) arrCnt.push(i)
	return arrCnt
}