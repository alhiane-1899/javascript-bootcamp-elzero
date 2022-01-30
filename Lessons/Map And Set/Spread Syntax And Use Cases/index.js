/*
    - Spread Operator => ...Iterable;
        --- "Allow Iterable To Expand In Place"
*/

// Spread With String => Expand String:
console.log("Osama"); // Osama;
console.log(..."Osama");// O s a m a;
console.log([..."Osama"]); ['O', 's', 'a', 'm', 'a'];

console.log('-'.repeat(50));

// using vars:
let myArray1 = [1, 2, 3];
let myArray2 = [4, 5, 6];

// Concatenate Arrays:
let allArrays = [...myArray1, ...myArray2];
console.log(allArrays); // [1, 2, 3, 4, 5, 6];

console.log('-'.repeat(50));

// Copy Array:
let copiedArray = [...myArray1];
console.log(copiedArray);
// [1, 2, 3];

console.log('-'.repeat(50));

// Push Inside Array:
let allFriends = ["Osama", "Ahmed", "Sayed"];
let thisYearFriends = ["Sameh", "Mahmoud"];
allFriends.push(...thisYearFriends);
console.log(allFriends); // [ 'Osama', 'Ahmed', 'Sayed', 'Sameh', 'Mahmoud' ];

console.log('-'.repeat(50));

// Use With Math Object:
let myNums = [10, 20, -100, 100, 1000, 500];
console.log(Math.max(...myNums)); // 1000;

console.log('-'.repeat(50));

// Spread With Objects => Merge Objects:
let objOne = {
    a: 1,
    b: 2,
};
let objTwo = {
    c: 3,
    d: 4,
};
console.log({ ...objOne, ...objTwo, e: 5 });
// { a: 1, b: 2, c: 3, d: 4, e: 5 };