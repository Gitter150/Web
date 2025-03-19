const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function freqCounter(array) {
    let freq = {};

    for(let i = 0; i<array.length; i++) {
        if(array[i] in freq) {
            freq[array[i]] += 1;
        }
        else {
            freq[array[i]] = 1;
        }
    }
    return freq;
}

reader.question("Enter the elements of the array: ", (string) => {
    let nums = string.split(" ").map(Number);
    console.log(freqCounter(nums));
    reader.close();
});




