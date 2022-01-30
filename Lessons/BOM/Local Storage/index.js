/*
    * BOM [Browser Object Model] => Local Storage:
        - setItem
        - getItem
        - removeItem
        - clear
        - key

    * Info:
        - No Expiration Time
        - HTTP And HTTPS
        - Private Tab
*/

// Set:
window.localStorage.setItem("color", "#F00");
window.localStorage.fontWeight = "bold";
window.localStorage["fontSize"] = "20px";

// Get:
console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.color);
console.log(window.localStorage["color"]);

// Remove One:
// window.localStorage.removeItem("color");

// Clear All:
// window.localStorage.clear();

// Get Key:
console.log(window.localStorage.key(0)); // color;

// Set Color In Page:
document.body.style.backgroundColor = window.localStorage.getItem("color");

// localStorage object:
console.log(window.localStorage); // localStorage object;
console.log(typeof window.localStorage); // Object;