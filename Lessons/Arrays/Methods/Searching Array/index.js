/*
    * Arrays Methods [Search]:
        - indexOf(Search Element, From Index [Opt])
        - lastIndexOf(Search Element, From Index [Opt])
        - includes(valueToFind, fromIndex [Opt]) [ES7]
*/

let myFriends = ["Ahmed", "Mohamed", "Sayed", "Ahmed", "Alaa"];
console.log(myFriends); // ["Ahmed", "Mohamed", "Sayed", "Ahmed", "Alaa"];

console.log("-".repeat(50));

// indexOf(Search Element, From Index [Opt]):
console.log(myFriends.indexOf("Ahmed")); // 0;
console.log(myFriends.indexOf("Ahmed", 2)); // 3;

console.log("-".repeat(50));

// lastIndexOf(Search Element, From Index [Opt]):
console.log(myFriends.lastIndexOf("Ahmed")); // 3;
console.log(myFriends.lastIndexOf("Ahmed", -3)); // 0;

console.log("-".repeat(50));

// includes(valueToFind, fromIndex [Opt]) [ES7]:
console.log(myFriends.includes("Ahmed")); // true;
console.log(myFriends.includes("Ahmed", 2)); // true;
console.log(myFriends.includes("Ahmed", 4)); // false;

console.log("-".repeat(50));

// arrays - check if item exist or not:
if (myFriends.lastIndexOf("Osama") === -1) {
    console.log("Not Found");
} // Not Found;

console.log(myFriends.indexOf("Osama")); // -1;
console.log(myFriends.lastIndexOf("Osama")); // -1;

console.log(myFriends.includes("Ahmed", 4) ? "Found" : "Not Found");
// Not Found;