/*
    * Control Flow:
        - if
        - else if
        - else
    * Syntax:
        if (Condition) {
            // Block Of Code
        } else if (Condition) {
            // Block Of Code
        } else {
            // Block Of Code
        }
*/

let price = 100;
let syrDiscount = 40;
let egDiscount = 30;
let ksaDiscount = 20;
let worldDiscount = 10;
let country = "Syria";

if (country === "KSA") {
    price -= ksaDiscount; // 80;
} else if (country === "Egypt") {
    price -= egDiscount; // 70;
} else if (country === "Syria") {
    price -= syrDiscount; // 60;
} else {
    price -= worldDiscount; // 90;
}

console.log(price); // 60;