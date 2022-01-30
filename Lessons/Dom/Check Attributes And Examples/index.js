/*
    * DOM [Check Attributes]:
        - Element.attributes
        - Element.hasAttribute
        - Element.hasAttributes
        - Element.removeAttribute
*/

// Element.attributes:
console.log("All My Paragraph Attributes:");
console.log(document.getElementsByTagName("p")[0].attributes);

console.log('-'.repeat(50));

let myP = document.getElementsByTagName("p")[0];

// Element.hasAttribute:
if (myP.hasAttribute("data-src")) {
    if (myP.getAttribute("data-src") === "") {
        // Element.removeAttribute:
        myP.removeAttribute("data-src");
    } else {
        myP.setAttribute("data-src", "New Value");
    }
} else {
    console.log(`Not Found`);
}

// Element.hasAttributes:
if (myP.hasAttributes()) {
    console.log(`My Paragraph Has Attributes`);
}   else {
    console.log(`My Paragraph Has No Attributes`);
}

console.log('-'.repeat(50));

if (document.getElementsByTagName("div")[0].hasAttributes()) {
    console.log(`My Div Has Attributes`);
} else {
    console.log(`My Div Has No Attributes`);
}