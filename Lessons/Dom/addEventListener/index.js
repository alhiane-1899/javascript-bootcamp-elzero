/*
    * DOM [Add Event Listener]:
        - addEventListener
        - Use Without On
        - Attach Multiple Events
        - Error Test

    * Search:
        - Capture & Bubbling JavaScript
        - removeEventListener
*/

let myP = document.querySelector("p");

// // Doesn't Attach Multiple Events:
// myP.onclick = one;
// myP.onclick = two;
// function one() {
//   console.log("Message From OnClick 1");
// }
// function two() {
//   console.log("Message From OnClick 2");
// }

// window.onload = "Osama"; // Not Error;

// myP.addEventListener("click", function () {
//   console.log("Message From OnClick 1 Event");
// });

//  Attach Multiple Events:
// myP.addEventListener("click", one); // Message From OnClick 1;
// myP.addEventListener("click", two); // Message From OnClick 2;

// myP.addEventListener("click", "String"); // Error;

myP.onclick = function () {
    let newP = myP.cloneNode(true);
    newP.className = "clone";
    document.body.appendChild(newP);
};

// let cloned = document.querySelector(".clone"); // Error
// cloned.onclick = function () {
//   console.log("Iam Cloned");
// };

document.addEventListener("click", function (e) {
    if (e.target.className === "clone") {
        console.log("Iam Cloned");
    }
});