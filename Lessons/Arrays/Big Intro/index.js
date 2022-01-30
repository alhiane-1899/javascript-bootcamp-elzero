/*
    * Arrays:
        - Create Arrays [Two Methods] new Array() + []
        - Access Arrays Elements
        - Nested Arrays
        - Change Arrays Elements
        - Check For Array Array.isArray(arr);
*/

// Create Arrays [Two Methods] new Array() + []
let myFriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];
console.log(myFriends); // ['Ahmed', 'Mohamed', 'Sayed', ['Marwan', 'Ali']];
let newArr = new Array("Ahmed", "Mohamed", "Sayed");
console.log(newArr); // ['Ahmed', 'Mohamed', 'Sayed'];

console.log("-".repeat(50));

// Access Arrays Elements - Nested Arrays:
console.log(`Hello ${myFriends[0]}`); // Hello Ahmed;
console.log(`Hello ${myFriends[2]}`); // Hello  Sayed;
console.log(`${myFriends[1][2]}`); // h;
console.log(`Hello ${myFriends[3][1]}`); // Hello Ali;
console.log(`${myFriends[3][1][2]}`); // i;

console.log("-".repeat(50));

// Change Arrays Elements:
console.log(myFriends); // ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];
myFriends[1] = "Gamal"; // "Mohamed" => "Gamal";
console.log(myFriends); // ["Ahmed", "Gamal", "Sayed", ["Marwan", "Ali"]];
myFriends[3] = ["Sameh", "Ameer"]; // ["Marwan", "Ali"] => ["Sameh", "Ameer"];
console.log(myFriends); // ["Ahmed", "Gamal", "Sayed", ["Sameh", "Ameer"]];
let arr = ["Amhed", "Mohammed", "Medo"];
// for memory => don't use new array for task:
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split("").reverse().join("");
}
console.log(arr);

console.log("-".repeat(50));

// Check For Array Array.isArray(arr);
console.log(typeof myFriends); // object;
console.log(Array.isArray(myFriends)); // true;