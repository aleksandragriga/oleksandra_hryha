function pow(x, y) {
    let result = 1; 
    for (let i = 0; i < y; i++) {
        result *= x; 
    }
    return result;
}

console.log(pow(2, 5)); 
console.log(pow(7, 11)); 
console.log(pow(45, 3)); 
console.log(pow(2,3));