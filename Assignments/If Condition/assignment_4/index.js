// Edit What You Want Here

let num1 = 4;
let num2 = 2;
let num3 = 4;
let num4 = 27;

/*
    Do Not Edit Below This Line
    Needed Output
    True 7 Times
*/

// Condition 1
if (num1 > num2) {
    console.log("True");
} else {
    console.log("False");
}

console.log('-'.repeat(50));

// Condition 2
if (num1 > num2 && num1 < num4) {
    console.log("True");
} else {
    console.log("False");
}

console.log('-'.repeat(50));

// Condition 3
if (num1 > num2 && num1 === num3) {
    console.log("True");
} else {
    console.log("False");
}

console.log('-'.repeat(50));

// Condition 4
if ((num1 + num2) < num4) {
    console.log("True");
} else {
    console.log("False");
}

console.log('-'.repeat(50));

// Condition 5
if ((num1 + num3) < num4) {
    console.log("True");
} else {
    console.log("False");
}

console.log('-'.repeat(50));

// Condition 6
if ((num1 + num2 + num3) < num4) {
    console.log("True");
} else {
    console.log("False");
}

console.log('-'.repeat(50));

// Condition 7
if (num4 - (num1 + num3) + num2 === 21) {
    console.log("True");
} else {
    console.log("False");
}