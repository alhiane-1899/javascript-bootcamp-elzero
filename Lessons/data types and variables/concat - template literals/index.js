/*
    * Concatenation:
        - "....." + " " + ".....";
    * Template Literals (Template Strings):
        - `.... ${var}`;
*/

// Concatenation:
var a = "We Love";
var b = "Javascript";
console.log(a + " " + b); // We Love Javascript;

console.log("-".repeat(50));

// console.log(...., ...., ....) => .... .... ....:
console.log(a, b); // We Love Javascript;

console.log("-".repeat(50));

// Template Literals:
let x = "We Love";
let y = "Javascript";
console.log(`${x} "${y}"`); // We Love "Javascript";
console.log(`${x} "${y}"
And 'Programming'`);
/*
    We Love "Javascript" /n
    And 'Programming'
*/
// html markup:
let title = "Product One";
let desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia perspiciatis dolorem facere sint aut est harum ratione consectetur eveniet, hic vitae corporis quis quam nihil quidem suscipit animi magnam. Culpa!";
let product = `
    <div class="product">
        <h2 class="title" id="specific">${title}</h2>
        <p class="desc">${desc}</p>
    </div>
`;
document.write(product);