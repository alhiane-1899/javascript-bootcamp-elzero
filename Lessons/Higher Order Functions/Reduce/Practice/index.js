/*
    - Reduce:
        --- Longest Word;
        --- Remove Characters + Use Reduce;
*/

/* Longest Word: */

let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test"];

let lng = theBiggest.reduce((prev, current) => {
    return prev.length < current.length ? current : prev;
}); 

console.log(lng); // Propaganda;

console.log('-'.repeat(50));

/* Remove Characters + Use Reduce: */

let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let rmc = removeChars
    .filter(el => el !== '@')
    .reduce((acc, current) => `${acc}${current}`);
console.log(rmc); // ELZERO;