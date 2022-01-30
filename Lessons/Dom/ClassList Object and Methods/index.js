/*
    * DOM [Class List]:
        - classList
        --- length
        --- contains
        --- item(index)
        --- add
        --- remove
        --- toggle
*/

let element = document.getElementById("btn");

console.log(element.classList); // [test, one, two, show];

console.log('-'.repeat(50));

console.log(typeof element.classList); // object;

console.log('-'.repeat(50));

console.log(element.classList.contains("osama")); // false;

console.log('-'.repeat(50));

console.log(element.classList.contains("show")); // true;

console.log('-'.repeat(50));

console.log(element.classList.item("3")); // show;

element.classList.add('active'); // add active class;

element.classList.remove('test'); // remove test class;

element.onclick = function () {
    element.classList.toggle("active"); // toggle active class;
};