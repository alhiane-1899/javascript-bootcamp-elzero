/*
    * DOM:
    - What Is DOM ?
        --- Document Object Modal => Object : document;
    - DOM Selectors:
        --- Find Element By ID
        --- Find Element By Tag Name
        --- Find Element By Class Name
        --- Find Element By CSS Selectors
        --- Find Element By Collection
        ------ title
        ------ body
        ------ images
        ------ forms
        ------ links
*/

let myIdElement = document.getElementById("my-div");
let myTagElements = document.getElementsByTagName("p");
let myClassElements = document.getElementsByClassName("my-span");
let myQueryElement = document.querySelector(".my-span");
let emailInput = document.querySelector('#form-one input[type="email"]');
let myQueryAllElements = document.querySelectorAll(".my-span");

console.log('Get Element By Id:');
console.log(myIdElement);

console.log('-'.repeat(50));

console.log('Get Elements By Tag Name:');
console.log(myTagElements);
console.log(myTagElements[1]);

console.log('-'.repeat(50));

console.log('Get Elements By class Name:');
console.log(myClassElements);
console.log(myClassElements[0]);

console.log('-'.repeat(50));

console.log('Get Element By CSS Selector:');
console.log(myQueryElement);
console.log(emailInput);

console.log('-'.repeat(50));

console.log('Get Elements By CSS Selectors:');
console.log(myQueryAllElements);
console.log(myQueryAllElements[1]);

console.log('-'.repeat(50));

console.log('Page Title:');
console.log(document.title);

console.log('-'.repeat(50));

console.log('Page Boduy:');
console.log(document.body);

console.log('-'.repeat(50));

console.log('Page Forms:');
console.log(document.forms);
console.log(document.forms[0].email);

console.log('-'.repeat(50));

console.log('Page Links:');
console.log(document.links);
console.log(document.links[1]);
console.log(document.links[1].href);

console.log('-'.repeat(50));

console.log(document.images);
console.log(document.images[0]);
console.log(document.images[0].src);
console.log(document.images[0].alt);