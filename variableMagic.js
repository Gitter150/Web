const { createInterface } = require('readline');

const reader = createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question("Enter your name: ", (name) => {
    var response = `Hello ${name}! Your name has ${name.length} letters.`;
    console.log(response);
    if(name.includes('a') || name.includes('A')){
        console.log("Your name has the letter 'a'!");
    }
    reader.close();
});



