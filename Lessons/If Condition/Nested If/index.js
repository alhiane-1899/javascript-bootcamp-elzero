/*
    Nested If
*/

let price = 100;
let discount = false;
let discountAmount = 30;
let country = "Egypt";
let student = true;
let hisParentDied = true;

if (discount === true) {

    price -= discountAmount; // 70;

} else if (country === "Egypt") {

    if (student === true) {

        if (hisParentDied) {

            price -= discountAmount + 40; // 30;

        } else {

            price -= discountAmount + 30; // 40;

        }

    } else {

        price -= discountAmount + 10; // 60;
        
    }
} else {

    price -= 10; // 90;

}

console.log(price); // 30;