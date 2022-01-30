/*
    Math Object:
        - round()
        - ceil()
        - floor()
        - min()
        - max()
        - pow()
        - random()
        - trunc() [Es6]
*/

// round method:
console.log(Math.round(99.2)); // 99;
console.log(Math.round(99.5)); // 100;

console.log('-'.repeat(50));

// ceil method:
console.log(Math.ceil(99.2)); // 100;
console.log(Math.ceil(99.9)); // 100;

console.log('-'.repeat(50));

// floor method:
console.log(Math.floor(99.2)); // 99;
console.log(Math.floor(99.9)); // 99;

console.log('-'.repeat(50));

// min method:
console.log(Math.min(10, 20, 100, -100, 90)); // -100;

console.log('-'.repeat(50));

// max method:
console.log(Math.max(10, 20, 100, -100, 90)); // 100;

console.log('-'.repeat(50));

// power method:
console.log(Math.pow(2, 4)); // 16;

console.log('-'.repeat(50));

// random method:
console.log(Math.random()); // 0.31896248088078005;
console.log(Math.random()); // 0.05093414131765428;
console.log(Math.random()); // 0.4200972575469233;

console.log('-'.repeat(50));

// trunc method => return int part from number:
console.log(Math.trunc(99.1)); // 99;
console.log(Math.trunc(99.5)); // 99;
console.log(Math.trunc(99.9)); // 99;