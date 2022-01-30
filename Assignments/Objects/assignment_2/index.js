// Method One:
let objMethodOne = {property: "Method One"};
console.log(objMethodOne.property); // "Method One";

console.log('-'.repeat(50));

// Method Two
let objMethodTwo = new Object({property: "Method Two"});
console.log(objMethodTwo.property); // "Method Two";

console.log('-'.repeat(50));

// Method Three
let objMethodThree = Object.create({property: "Method Three"});
console.log(objMethodThree.property); // "Method Three";

console.log('-'.repeat(50));

// Method Four
let objMethodFour = Object.assign({}, {property: "Method Four"});
console.log(objMethodFour.property); // "Method Four";