/*
    * DOM [Traversing]:
        - nextSibling
        - previousSibling
        - nextElementSibling
        - previousElementSibling
        - parentElement
*/

let span = document.querySelector(".two");

// nextSibling:
console.log(span.nextSibling); // <!--Last Comment-->;

console.log('-'.repeat(50));

// previousSibling:
console.log(span.previousSibling); // <!--First Comment-->

console.log('-'.repeat(50));

// nextElementSibling:
console.log(span.nextElementSibling); // span.three;

console.log('-'.repeat(50));

// previousElementSibling:
console.log(span.previousElementSibling); // span.one;

console.log('-'.repeat(50));

// parentElement:
console.log(span.parentElement); // div#my-div;

console.log('-'.repeat(50));

// remove parent element:
span.onclick = function () {
    span.parentElement.remove();
}