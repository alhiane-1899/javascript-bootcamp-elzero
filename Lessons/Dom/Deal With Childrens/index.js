/*
    * DOM [Deal With Childrens]:
        - children
        - childNodes
        - firstChild
        - lastChild
        - firstElementChild
        - lastElementChild
*/

let myElement = document.querySelector(".my-div");

console.log('My Div:');
console.log(myElement);

console.log('-'.repeat(50));

// children:
console.log('My Div Children - Just Eelements:');
console.log(myElement.children);
console.log(myElement.children[0]);

console.log('-'.repeat(50));

// childNodes:
console.log('My Div Children - All Nodes:');
console.log(myElement.childNodes);
console.log(myElement.childNodes[0]);

console.log('-'.repeat(50));

// firstChild:
console.log("First Child Node:");
console.log(myElement.firstChild);

console.log('-'.repeat(50));

// lastChild:
console.log("Last Child Node:");
console.log(myElement.lastChild);

console.log('-'.repeat(50));

// firstElementChild:
console.log("First Element Child:");
console.log(myElement.firstElementChild);

console.log('-'.repeat(50));

// lastElementChild:
console.log("Last Element Child:");
console.log(myElement.lastElementChild);