/*
    - Regular Expression:
        --- replace.
        --- replaceAll.
*/

let txt = "We Love Programming And @ Because @ Is Amazing";

// replace:
console.log(txt.replace("@", "JavaScript"));
// We Love Programming And JavaScript Because @ Is Amazing;

console.log('-'.repeat(50));

// replaceAll:
console.log(txt.replaceAll("@", "JavaScript"));
// We Love Programming And JavaScript Because JavaScript Is Amazing;

console.log('-'.repeat(50));

let re = /@/ig;

// replace with regex:
console.log(txt.replace(re, "JavaScript"));
// We Love Programming And JavaScript Because JavaScript Is Amazing;
// replace one but //ig => all;

console.log('-'.repeat(50));

// replaceAll with regex:
console.log(txt.replaceAll(/@/ig, "JavaScript"));
// We Love Programming And JavaScript Because JavaScript Is Amazing;