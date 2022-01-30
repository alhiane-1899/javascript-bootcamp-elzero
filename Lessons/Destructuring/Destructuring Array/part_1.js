/*
    * Destructuring:
        --- "is a JavaScript expression that allows us to extract data from arrays, objects, and maps and set them into new, distinct variables."
        --- Destructuring Array:
*/

let a = 1;
let b = 2;
let c = 3;
let d = 4;

let myFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];

[a = "A", b, c, d, e = "Osama", f] = myFriends;

console.log(a); // Ahmed;
console.log(b); // Sayed;
console.log(c); // Ali;
console.log(d); // Maysa;
console.log(e); // Osama (default value of e);
console.log(f); // undefined;
console.log(myFriends[5]); // undefined => f;

console.log('-'.repeat(50));

let [, y, , z] = myFriends;

console.log(y); // Sayed;
console.log(z); // Maysa;