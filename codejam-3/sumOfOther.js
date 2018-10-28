function sumOfOther(arr) {
	let sum = arr.reduce((acc, curr) => acc + curr);
    return arr.map(item => sum - item);
  }