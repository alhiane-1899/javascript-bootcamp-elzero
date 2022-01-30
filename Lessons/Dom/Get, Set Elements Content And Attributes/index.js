/*
    * DOM [Get / Set Elements Content And Attributes]:
        - innerHTML => translate tags;
        - textContent => put tags directly (code);
        - Change Attributes Directly.
        - Change Attributes With Methods:
            --- getAttribute
            --- setAttribute

    * Search:
        - innerText.
*/

let myElement = document.querySelector(".js");

console.log('Inner Html Of Element:');
console.log(myElement.innerHTML);
// Hello From <span>Javascript</span> And From &lt;span&gt;

console.log('-'.repeat(50));

console.log('Text Content Of Element:');
console.log(myElement.textContent);
// Hello From Javascript And From <span>;

myElement.innerHTML = "Text From <span>Main.js</span> File";
// Text From Main.js File;

myElement.textContent = "Text From <span>Main.js</span> File";
// Text From <span>Main.js</span> File;

// Change Attributes Directly:
document.images[0].src = `https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png`;
document.images[0].alt = "Alternate Text";
document.images[0].title = "Google Logo";
document.images[0].id = "ggl-logo";
document.images[0].className = "google-logo";

console.log('-'.repeat(50));

// Change Attributes With Methods:
let myLink = document.querySelector(".link");

// getAttribute(attr name):
console.log('Get Attributes:');
console.log(myLink.getAttribute("class")); // link;
console.log(myLink.getAttribute("href")); // #;

console.log('-'.repeat(50));

// setAttribute(attr name, value):
myLink.setAttribute("href", "https://twitter.com");
myLink.setAttribute("title", "Twitter");