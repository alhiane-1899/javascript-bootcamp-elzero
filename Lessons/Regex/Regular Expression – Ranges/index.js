/*
    * Regular Expression - Ranges:

    - Part 1:
        --- (X|Y) => X Or Y.
        --- [0-9] => 0 To 9.
        --- [^0-9] => Any Character Not 0 To 9.

    - Part 2:
        --- [a-z].
        --- [^a-z].
        --- [A-Z].
        --- [^A-Z].
        --- [abc].
        --- [^abc].

*/

// part 1:

// Or:
let tld = "Com Net Org Info Code Io";
let tldRe = /(info|org|io)/ig;
console.log(tld.match(tldRe)); // ['Org', 'Info', 'Io's]

console.log('-'.repeat(50));

// range of nums:
let nums = "12345678910";
let numsRe = /[0-2]/g;
console.log(nums.match(numsRe)); // [1, 2, 1, 0];

console.log('-'.repeat(50));

// not in range of nums:
let notNums = "12345678910";
let notNsRe = /[^0-2]/g;
console.log(notNums.match(notNsRe)); // [3, 4, 5, 6, 7, 8, 9];

console.log('-'.repeat(50));

// not in range of nums:
let specialNums = "1!2@3#4$5%678910";
let specialNumsRe = /[^0-9]/g;
console.log(specialNums.match(specialNumsRe)); // [!, @, #, $, %];

console.log('-'.repeat(50));

// Practice:
let practice = "Os1 Os1Os Os2 Os8 Os8Os";
let practiceRe = /Os[5-9]Os/g;
console.log(practice.match(practiceRe)); // [Os8Os];

console.log('-'.repeat(50));

// part 2:

let myString = "AaBbcdefG123!234%^&*";

// range of samll letters:
let atozSmall = /[a-z]/g;
console.log(myString.match(atozSmall)); // [ 'a', 'b', 'c', 'd', 'e', 'f' ];

console.log('-'.repeat(50));

// not in range of samll letters:
let NotAtozSmall = /[^a-z]/g;
console.log(myString.match(NotAtozSmall));
// ['A', 'B', 'G', '1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*'];

console.log('-'.repeat(50));

// range of capital letters:
let atozCapital = /[A-Z]/g;
console.log(myString.match(atozCapital)); // [ 'A', 'B', 'G' ];

console.log('-'.repeat(50));

// not in range of capital letters:
let NotAtozCapital = /[^A-Z]/g;
console.log(myString.match(NotAtozCapital));
// [ 'a', 'b', 'c', 'd', 'e', 'f', '1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*'];

console.log('-'.repeat(50));

// target letters:
let aAndcAnde = /[ace]/g;
console.log(myString.match(aAndcAnde)); // [ 'a', 'c', 'e' ];

console.log('-'.repeat(50));

// not target letters:
let NotaAndcAnde = /[^ace]/g;
console.log(myString.match(NotaAndcAnde));
// ['A', 'B', 'b', 'd', 'f', 'G', '1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*'];

console.log('-'.repeat(50));

// samll and capital letters:
let lettersCapsAndSmall = /[a-zA-Z]/g;
console.log(myString.match(lettersCapsAndSmall)); 
// ['A', 'a', 'B', 'b', 'c', 'd', 'e', 'f', 'G'];

console.log('-'.repeat(50));

// not samll or capital letters:
let numsAndSpecials = /[^a-zA-Z]/g;
console.log(myString.match(numsAndSpecials)); 
// ['1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*'];

console.log('-'.repeat(50));

// practice:
let specials = /[^a-zA-Z0-9]/g;
console.log(myString.match(specials)); // [ '!', '%', '^', '&', '*' ];