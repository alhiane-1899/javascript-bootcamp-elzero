/*
    * DOM [Create Elements]:
        - createElement
        - createComment
        - createTextNode
        - createAttribute
        - appendChild
*/

// createElement:
let myElement = document.createElement("div");

// createAttribute:
let myAttr = document.createAttribute("data-custom");

// createTextNode:
let myText = document.createTextNode("Product One");

// createComment
let myComment = document.createComment("This Is Div");

// set class attribute to element:
myElement.className = "product";
// set "data-custom" to element:
myElement.setAttributeNode(myAttr);
// set value to "data-custom":
myElement.setAttribute("data-custom", "Testing");

// Append Text To Element:
myElement.appendChild(myText);

// Prepend Comment To Element:
myElement.prepend(myComment);

// Append Element To Body:
document.body.appendChild(myElement);