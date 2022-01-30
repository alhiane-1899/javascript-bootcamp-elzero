function multiply(...numbers) {
    let result = 1;
    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] !== 'string') {
            result *= parseInt(numbers[i]);
        }
    }
    return result;
}

console.log(multiply(10, 20)); // 200;
console.log(multiply("A", 10, 30)); // 300;
console.log(multiply(100.5, 10, "B")); // 1000;