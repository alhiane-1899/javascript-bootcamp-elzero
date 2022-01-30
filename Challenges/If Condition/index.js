/*
    If Condition Challenge
*/

// Write Condition With Ternary If Syntax
let a = 10;
if (a < 10) {
    console.log(10);
} else if (a >= 10 && a <= 40) {
    console.log("10 To 40");
} else if (a > 40) {
    console.log("> 40");
} else {
    console.log("Unknown");
}
a < 10 ? 
console.log(10) :
a >= 10 && a <= 40 ?
console.log("10 To 40") :
a > 40 ?
console.log("> 40") :
console.log("Unknown");

console.log('-'.repeat(50));

let st = "Elzero Web School";

// length of st * 2:
if ((st.length + st.length).toString() === "34") {
    console.log("Good");
}

console.log('-'.repeat(50));

// W Position May Change:
if (st[st.indexOf('w'.toUpperCase())].toLowerCase() === "w") {
    console.log("Good");
}

console.log('-'.repeat(50));

if (!typeof(st) !== "string") {
    console.log("Good");
}

console.log('-'.repeat(50));

if (typeof st.length === "number") {
    console.log("Good");
}

console.log('-'.repeat(50));

if (`${st.slice(0, 6)}${st.slice(0, 6)}` === "ElzeroElzero") {
    console.log("Good");
}