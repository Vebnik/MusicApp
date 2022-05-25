export const getPage = (totalCnt) => {
	const arrCnt = []
	for (let i = 1; i <= Math.ceil(totalCnt/11); i++) arrCnt.push(i)
	return arrCnt
}