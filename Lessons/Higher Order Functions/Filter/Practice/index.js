/*
    - Filter:
        --- Filter Longest Word By Number:
*/

// Filter Words More Than 4 Characters:
let sentence = "I Love Foood Code Too Playing Much";
let smallWords = sentence
    .split(" ")
    .filter(el => el.length <= 4)
    .join(" ");
console.log(smallWords); // I Love Code Too Much;

// Ignore Numbers:
let ignoreNumbers = "Elz123er4o";
let ign = ignoreNumbers
    .split("")
    .filter(el => isNaN(parseInt(el)))
    .join("");
console.log(ign); // Elzero;

// Filter Strings + Multiply:
let mixMapAndFilter = "A13BS2ZX";
let mix = mixMapAndFilter
    .split("")
    .filter(el => !isNaN(+el))
    .map(el => el * el)
    .join("")
console.log(+mix); // 194;