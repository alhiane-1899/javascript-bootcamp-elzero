/*
    - Array Methods
    - Array.some(CallbackFunc(Element, Index, Array), This Argument):
        --- CallbackFunc => Function To Run On Every Element On The Given Array.
        ------ Element => The Current Element To Process.
        ------ Index => Index Of Current Element.
        ------ Array => The Current Array Working With.
        --- This Argument => Value To Use As This When Executing CallbackFunc.
    --
    - Using:
        --- Check if Element Exists In Array;
        --- Check If Number In Range;
*/

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myNumber = 5;

let check1 = nums.some(function (e) {
    console.log("Test");
    return e > myNumber;
});
// test(6) => becuase some break loop when set to true;
// 1, 2, 3, 4, 5, 6 => 6 > 5 => break;
console.log(check1); // true;

console.log('-'.repeat(50));

let check2 = nums.some(function (e) {
    return e > this;
}, myNumber); // this => myNumber = 5;
console.log(check2); // true;

console.log('-'.repeat(50));

function checkValues(arr, val) {
    return arr.some(function (e) {
        return e === val;
    });
}
console.log(checkValues(nums, 20)); // flase;
console.log(checkValues(nums, 5)); // true;

console.log('-'.repeat(50));

let range = {
    min: 10,
    max: 20,
};
let checkNumberInRange = nums.some(function (e) {
    return e >= this.min && e <= this.max; // e in [10, 20];
}, range); // this => range;
console.log(checkNumberInRange); // true;

console.log('-'.repeat(50));

// Exemple => check if an element exists in array:
function checkObjects(iterable, targetObj) {
    return iterable.some(obj => {
        return JSON.stringify(obj) === JSON.stringify(targetObj);
    });
}

const listOfObjs = [{a: 1, b: 2}, {c: 3, d: 4}, {e: 5, f: 6}];
const targetObj = {c: 3, d: 4};

console.log(checkObjects(listOfObjs, targetObj)); // true;