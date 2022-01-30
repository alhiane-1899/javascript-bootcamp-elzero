/*
    - Filter:
        --- method creates a new array.
        --- with all elements that pass the test implemented by the provided function.

    - Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg):
        --- Element => The current element being processed in the array.
        --- Index => The index of the current element being processed in the array.
        --- Array => The Current Array.
*/

// Get Friends With Name Starts With A:
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];
let filterdFriends = friends.filter(el => el.startsWith("A"));
console.log(filterdFriends); // [ 'Ahmed', 'Asmaa', 'Amgad' ];

console.log('-'.repeat(50));

// Get Even Numbers Only:
let numbers = [11, 20, 2, 5, 17, 10];
let evenNumbers = numbers.filter(function (el) {
    return el % 2 === 0;
});
console.log(evenNumbers); // [ 20, 2, 10 ];

console.log('-'.repeat(50));

/* Test Map vs Filter: */

let addMap = numbers.map(function (el) {
    return el + el;
});
console.log(addMap); // [ 22, 40, 4, 10, 34, 20 ];

console.log('-'.repeat(50));

let addFilter = numbers.filter(function (el) {
    return el + el; // el + el => true;
});
console.log(addFilter); // [11, 20, 2, 5, 17, 10];