/*
    * Scope:
        - Global And Local Scope;
*/

var a = 1;
let b = 2;

function showText() {
    var a = 10;
    let b = 20;
    console.log(`Function - From Local ${a}`); // Function - From Local 10;
    console.log(`Function - From Local ${b}`); // Function - From Local 20;
}

console.log(`From Global ${a}`); // From Global 1;
console.log(`From Global ${b}`); // From Global 2;

showText();