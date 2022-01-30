/*
    Array Methods:
    - Array.every(CallbackFunc(Element, Index, Array), This Argument)
    --- all elements return true => every return true;
    --- one element return false => every return false;
    --- CallbackFunc => Function To Run On Every Element On The Given Array
    ------ Element => The Current Element To Process
    ------ Index => Index Of Current Element
    ------ Array => The Current Array Working With
    --- This Argument => Value To Use As This When Executing CallbackFunc
*/

const locations = {
    20: "Place 1",
    30: "Place 2",
    10: "Place 3",
    40: "Place 4",
};

let mainLocation = 15; // main location > 15;

let locationsArray = Object.keys(locations);

console.log(locationsArray); // ["20", "30", "10", "40"];

console.log('-'.repeat(50));

let locationArrayNumbers = locationsArray.map((n) => +n);

console.log(locationArrayNumbers); // [20, 30, 10, 40];

console.log('-'.repeat(50));

let check = locationArrayNumbers.every(function (el) {
    return el > this;
}, mainLocation); // this => mainLocation = 15;

console.log(check); // false => because 10 < 15 (false);

// one flase => every() return => false;