/*
    Number Methods:
        - Two Dots To Call A Methods
        - toString()
        - toFixed()
        - parseInt()
        - parseFloat()
        - isInteger() [ES6]
        - isNaN() [ES6]
*/

// toString Method:
console.log((100).toString());

console.log('-'.repeat(50));

// Two Dots To Call A Methods:
console.log(100..toString()); // "100";
console.log(100.10.toString()); // "100.1";

console.log('-'.repeat(50));

// toFixed Method:
console.log(100.554555.toFixed(2)); // "100.55" => 4 < => 5;
console.log(100.555555.toFixed(2)); // "100.56" => 5 > => 6;

console.log('-'.repeat(50));

console.log(Number("100 Osama")); // NaN;
console.log(+"100 Osama"); // NaN;
console.log(parseInt("100 Osama")); // 100;
console.log(parseInt("Osama 100 Osama")); // NaN;
console.log(parseInt("Osama 100")); // NaN;
console.log(parseInt("100.500 Osama")); // 100;
console.log(parseFloat("100.500 Osama")); // 100.5;

console.log('-'.repeat(50));

// isInteger Method:
console.log(Number.isInteger("100")); // fasle;
console.log(Number.isInteger(100.500)); // false;
console.log(Number.isInteger(100)); // true;

console.log('-'.repeat(50));

// isNaN Method => operation that return NaN:
console.log(Number.isNaN("Osama" / 20)); // true;
console.log(Number.isNaN("100")); // false => not NaN;
console.log(Number.isNaN("Osama")); // false => not NaN;