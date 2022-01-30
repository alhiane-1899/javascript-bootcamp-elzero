/*
    Array Challenge:
*/

let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

console.log(my.slice(zero, ++counter).reverse());
// ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(zero, counter); // zero: 0, counter: 4;

console.log('-'.repeat(50));

console.log(my.slice(++zero, --counter).reverse()); 
// ["Elham", "Mazero"];

console.log(zero, counter); // zero: 1, counter: 3;

console.log('-'.repeat(50));

console.log(zero, counter); // zero: 1, counter: 3;

console.log(`${
        my[--counter].substr(--zero, counter)
    }${
        my[++zero].substr(counter)
    }`);
// "Elzero";

console.log('-'.repeat(50));

console.log(zero, counter); // zero: 1, counter: 2;

console.log(`${
        my[zero].substr(-counter, zero)
    }${ 
        my[zero].substr(-zero, zero).toUpperCase()
    }`); 
// "rO";