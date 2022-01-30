/*
    * Array Methods - Array.from(Iterable, MapFunc, This):
    --- Variable
    --- String Numbers
    --- Set
    --- Using The Map Function
    --- Arrow Function
    --- Shorten The Method + Use arguments
*/

// Iterable => "Osama" - "12345" - ...:
console.log(Array.from("Osama")); // ["O", "s", "a", "m", "a"];
// MapFunc - n => +n + +n:
console.log(Array.from("12345", n => +n + +n)); // [2, 4, 6, 8, 10];

console.log('-'.repeat(50));

// get unique data from array:
let myArray = [1, 1, 1, 2, 3, 4];
let mySet = new Set(myArray);
console.log(Array.from(mySet)); // [1, 2, 3, 4];
console.log([...new Set(myArray)]); // [1, 2, 3, 4] => by spread opr;

console.log('-'.repeat(50));

// Shorten The Method + Use arguments:
function af() { return Array.from(arguments); }

console.log(af("Osama", "Ahmed", "sayed", 1, 2, 3));
// ["Osama", "Ahmed", "sayed", 1, 2, 3];