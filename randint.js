function randint(a, b) {
    let randValue = Math.random();
    scaledValue = randValue*(b-a+1) + a;
    return Math.floor(scaledValue);
}

console.log(randint(-10,10));