/*
    * Arrays Methods [Slicing]:
        - slice(Start [Opt], End [Opt] Not Including End)
        --- slice() => All Array
        --- If Start Is Undefined => 0
        --- Negative Count From End
        --- If End Is Undefined || > Indexes => Slice To The End Array.length
        --- Return New Array
        - splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
        --- If Negative => Start From The End
*/

let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
console.log(myFriends);
// ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];

console.log('-'.repeat(50));

console.log("Slice:");

console.log('-'.repeat(50));

// slice():
console.log(myFriends.slice()); 
// ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];

console.log('-'.repeat(50));

// slice(start):
console.log(myFriends.slice(1));
// ["Sayed", "Ali", "Osama", "Gamal", "Ameer"];

console.log('-'.repeat(50));

// slice(start, end):
console.log(myFriends.slice(1, 3));
// ["Sayed", "Ali"];

console.log('-'.repeat(50));

// If Start Is Undefined => 0:
console.log(myFriends.slice(undefined, 3));
// ["Ahmed", "Sayed", "Ali"];

console.log('-'.repeat(50));

// Negative Count From End:
console.log(myFriends.slice(-3)); // ["Osama", "Gamal", "Ameer"];
console.log(myFriends.slice(1, -2)); // ["Sayed", "Ali", "Osama"];
console.log(myFriends.slice(-4, -2)); // ["Ali", "Osama"];

console.log('-'.repeat(50));

// If End Is Undefined || > Indexes => Slice To The End Array.length:
console.log(myFriends.slice(3, 10)); // 10 out of myFriends range;
// end > Indexes => ["Osama", "Gamal", "Ameer"];

console.log('-'.repeat(50));

// Slice Return New Array:
console.log(myFriends); // ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];

console.log('-'.repeat(50));

console.log("Splice:");

console.log('-'.repeat(50));

// splice(0, 0, "Sameer", "Samara");
myFriends.splice(0, 0, "Sameer", "Samara");
console.log(myFriends);
// ["Sameer", "Samara", "Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];

console.log('-'.repeat(50));

// splice(myFriends.length - 1, 0, "Alhiane");
myFriends.splice(myFriends.length - 1, 0, "Alhiane");
console.log(myFriends);
// ["Sameer", "Samara", "Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Alhiane", "Ameer"];

console.log('-'.repeat(50));

// splice(0, 1);
myFriends.splice(0, 1);
console.log(myFriends);
// ["Samara", "Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Alhiane", "Ameer"];

console.log('-'.repeat(50));

// splice(myFriends.length - 1, 1);
myFriends.splice(myFriends.length - 1, 1);
console.log(myFriends);
// ["Samara", "Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Alhiane"];

console.log('-'.repeat(50));

// splice(2, 5, "Medo", "Kadija");
myFriends.splice(2, 3, "Medo", "Kadija");
console.log(myFriends);
// ["Samara", "Ahmed", "Medo", "Kadija", "Gamal", "Ameer"];