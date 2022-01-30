/*
    Conditional (Ternary) Operator
*/

let theName = "Mona";
let theGender = "Female";
let theAge = 30;

if (theGender === "Male") {
    console.log("Mr");
} else {
    console.log("Mrs");
}

console.log('-'.repeat(50));

// Condition ? If True : If False:
theGender === "Male" ? console.log("Mr") : console.log("Mrs");
let result = theGender === "Male" ? "Mr" : "Mrs";
console.log(result);

console.log('-'.repeat(50));

console.log(theGender === "Male" ? "Mr" : "Mrs");

console.log('-'.repeat(50));

console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);

console.log('-'.repeat(50));

// Condition ? If : Else If : Else:
theAge < 15
    ? console.log("Child")
    : theAge >= 15 && theAge <= 25
    ? console.log("Teenager")
    : theAge >= 26 && theAge <= 60
    ? console.log("Guy")
    : theAge > 60
    ? console.log("Old")
    : console.log("Unknown");