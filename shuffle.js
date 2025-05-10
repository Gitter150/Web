function shuffle(arr) {
    
    let n = arr.length;
    let shuffledIndices = new Array(n);
    let alreadyFound = new Array(n);
    let result = new Array(n);
    let randIndex;
    
    for(let i = 0; i < n; i++) {
        while(true) {
            randIndex = Math.floor(Math.random()*n);
                 if(alreadyFound[randIndex]) continue;
            alreadyFound[randIndex] = true;
            result[i] = arr[randIndex];
            break;
        }
    }
    
    return result;
}

let arr = [1,2,3,4,5];
console.log(shuffle(arr));
