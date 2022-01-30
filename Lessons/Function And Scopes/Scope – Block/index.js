/*
    * Scope:
        - Block Scope [If, Switch, For]
*/

var x = 10;

if (true) {
    let x = 50;
    console.log(`From If Block ${x}`); // From If Block 50;
}

console.log(`From Global ${x}`); // From Global 10;