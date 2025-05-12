let arr = [1,234,567,6];

let item = arr.find((item, index) => {
	if(index == 0) return;
	return item % index == 0;
});

function print(val) {
	process.stdout.write(String(val) + '\n');
} 

print(arr);
print(item);

