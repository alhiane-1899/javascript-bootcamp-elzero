function convert(n) {
    return n.toString().split("").reverse()
    .map(char => +char);
}

// Testing Ouputs:
console.log(convert(564987654))  // [4, 5, 6, 7, 8, 9, 4, 6, 5];
console.log(convert(529132)) // [2, 3, 1, 9, 2, 5];