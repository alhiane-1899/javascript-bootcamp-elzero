/*
    * Map:
        - Swap Cases
        - Inverted Numbers
        - Ignore Numbers
*/

let swappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";

/* Swap Cases: */

// Regular Function Version:
let sw1 = swappingCases
    .split("")
    .map(function (el) {
        return el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase();
    })
    .join("");
console.log(`Swap Cases 'Regular Function' => ${sw1}`);
// Swap Cases 'Regular Function' => ELzerO;

console.log('-'.repeat(50));

// Arrow Function Version:
let sw2 = swappingCases
    .split("")
    .map(el => (el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()))
    .join("");
console.log(`Swap Cases 'Arrow Function' => ${sw2}`);
// Swap Cases 'Arrow Function' => ELzerO;

console.log('-'.repeat(50));

/* Inverted Numbers: */

// Regular Function Version:
let inv1 = invertedNumbers.map(function (el) {
    return -el;
});
console.log(`Inverted Numbers 'Regular Function' => ${inv1}`);
// Inverted Numbers 'Regular Function' => [-1,10,20,-15,-100,30];

console.log('-'.repeat(50));

// Arrow Function Version:
let inv2 = invertedNumbers.map(el => -el);
console.log(`Inverted Numbers 'Arrow Function' => ${inv2}`);
// Inverted Numbers 'Arrow Function' => [-1,10,20,-15,-100,30];

console.log('-'.repeat(50));

/* Ignore Numbers: */

// Regular Function Version:
let ign1 = ignoreNumbers
    .split("")
    .map(function (ele) {
        return isNaN(parseInt(ele)) ? ele : "";
    })
    .join("");
    console.log(`Ignore Numbers 'Regular Function' => ${ign1}`);

console.log('-'.repeat(50));
// Ignore Numbers 'Regular Function' => Elzero;

// Arrow Function Version:
let ign2 = ignoreNumbers
    .split("")
    .map(function (ele) {
        return isNaN(parseInt(ele)) ? ele : "";
    })
    .join("");
console.log(`Ignore Numbers 'Arrow Function' => ${ign2}`);
// Ignore Numbers 'Arrow Function' => Elzero;