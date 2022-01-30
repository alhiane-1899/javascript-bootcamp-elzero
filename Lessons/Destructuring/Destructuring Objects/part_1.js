/*
    Destructuring
    - Destructuring Object
*/

const user = {
    theName: "Osama",
    theAge: 33,
    theTitle: "Developer",
    theCountry: "Egypt",
};

console.log(user.theName); // Osama;
console.log(user.theAge); // 33;
console.log(user.theTitle); // Developer;
console.log(user.theCountry); // Egypt;

console.log('-'.repeat(50));

// without destructuring:
// let theName = user.theName;
// let theAge = user.theAge;
// let theTitle = user.theTitle;
// let theCountry = user.theCountry;
// console.log(theName); // Osama;
// console.log(theAge); // 33;
// console.log(theTitle); // Developer;
// console.log(theCountry); // Egypt;

// console.log('-'.repeat(50));

// with destructuring - vars already declared:
// ({ theName, theAge, theTitle, theCountry } = user);
// console.log(theName); // Osama;
// console.log(theAge); // 33;
// console.log(theTitle); // Developer;
// console.log(theCountry); // Egypt;

// console.log('-'.repeat(50));

// with destructuring - vars not declared:
const { theName, theAge, theCountry } = user;
console.log(theName); // Osama;
console.log(theAge); // 33;
console.log(theCountry); // Egypt;