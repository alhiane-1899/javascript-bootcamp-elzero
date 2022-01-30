/*
    * Function:
        - Return
        - Automatic Semicolon Insertion [No Line Terminator Allowed]:
            --- return (enter)
                num1 + num2;
        - Interrupting
*/

function generate(start, end) {
    for (let i = start; i <= end; i++) {
        console.log(i);
        if (i === 15) {
            return; // break function;
        }
    }
}
generate(10, 20);
/*
10
11
12
13
14
15
*/

console.log('-'.repeat(50));

function capitalize(str) {
    return str.split(" ").map(word => {
        return `${word[0].toUpperCase()}${word.substr(1)}`;
    });
}
console.log(capitalize("heloo world").join(" ")); // Hello World;