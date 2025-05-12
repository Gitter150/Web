
let arr = [-5,-6,-7,34,-56,-100,100,13,-67,-100,1,0];
arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

function maxSubArrSum(arr) {
	
	if(arr.length == 0) return;
	if(arr.length == 1) return arr[0];

	let i = 0, maxSum = arr[0], currSum = arr[0], low = 0;

	while(i < arr.length) {
		
		if(currSum < maxSum) {
			currSum = 
		}
		else {
			maxSum = currSum;
		}
		i++;
	}

	return maxSum;
}

process.stdout.write( maxSubArrSum(arr)+"\n" );