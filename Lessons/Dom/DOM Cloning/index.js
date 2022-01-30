/*
    * DOM [Cloning]:
        - cloneNode(Deep - true or false):
            --- clone element with it children or nor ?
*/

// cloneNode(false) =>  clone element without it children:
// let myP = document.getElementById("my-p").cloneNode(false);

// clone element with it children:
let myP = document.getElementById("my-p").cloneNode(true);

// #my-div element:
let myDiv = document.getElementById("my-div");

myP.id = `${myP.id}-clone`; // #my-p-clone;

// append clone of #m-yP to #my-div;
myDiv.appendChild(myP);