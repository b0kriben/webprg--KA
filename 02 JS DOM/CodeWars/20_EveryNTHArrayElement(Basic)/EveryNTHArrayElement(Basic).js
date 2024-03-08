function every(arr, interval = 1, start = 0){
	return arr.slice(start).filter((a, i) => i % interval === 0)
}