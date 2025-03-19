console.log("Beginning..");
let arr1 = [1,2,3,4,5,6];
let arr2 = [2,4,6,8,10,12,14];
let count1 = 0;
let count2 = 0;
setTimeout(()=>{
    for(let x in arr1) {
        count1 += 1;
    }
},3000);
setTimeout(()=>{
    for(let x in arr2) {
        count1 += 1;
    }
},3000);
setTimeout(()=>{
    console.log(count1+count2);
},3000);
// did i just simmulate multithreading here?? all these functions execute
// simultaneously, that is, after 3s. i mean, almost, differing by the 
// time required for the interpreter to move from one line to the next line,
// which is negligible.
// infact, we can even try for the limiting case as
// the time par approaches zero. 0.1 ms perhaps?? all functions execute after this delay.

// am i right? 

