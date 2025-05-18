function randint(a, b) {
    let randValue = Math.random();
    scaledValue = randValue*(b-a+1) + a;
    return Math.floor(scaledValue);
}

for(let i = 0; i < 100; i++) console.log(randint(-10,10));