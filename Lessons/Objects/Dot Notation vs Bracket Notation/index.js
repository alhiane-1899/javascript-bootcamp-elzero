/*
    - Object:
        --- Dig Deeper.
        --- Dot Notation vs Bracket Notation.
        --- Dynamic Property Name.
*/

let myVar = "country";

let user = {
    theName: "Osama",
    "my age": 23,
    country: "Egypt",
};

// Dot Notation:
console.log(user.theName); // Osama;

console.log('-'.repeat(50));

// Bracket Notation:
console.log(user["my age"]); // 23;

console.log('-'.repeat(50));

// Dynamic Property Name:
console.log(user.country); // user.country => Egypt;
console.log(user.myVar); // undefined => in user no property with myVar name;
console.log(user[myVar]); // user.country => Egypt;