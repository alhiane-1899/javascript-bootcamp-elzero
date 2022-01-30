/*
    - Higher Order Functions:
        ---> is a function that accepts functions as parameters and/or returns a function.

    - Map:
        --- method creates a new array.
        --- populated with the results of calling a provided function on every element.
        --- in the calling array.

    - Syntax map(callBackFunction(Element, Index, Array) { }, thisArg):
        --- Element => The current element being processed in the array.
        --- Index => The index of the current element being processed in the array.
        --- Array => The Current Array.

    - Notes:
        --- Map Return A New Array.

    - Examples
        --- Anonymous Function.
        --- Named Function.

*/

let myNums = [1, 2, 3, 4, 5, 6];

// Exemple Without Map:
let newArray = [];
for (let i = 0; i < myNums.length; i++) {
    newArray.push(myNums[i] + myNums[i]);
}
console.log(newArray); // [2, 4, 6, 8, 10, 12];

console.log('-'.repeat(50));

// Exemple With Map:
let addSelf1 = myNums.map(function (element, index, arr) {
    console.log(`Current Element => ${element}`);
    console.log(`Current Index => ${index}`);
    console.log(`Array => ${arr}`);
    console.log(`This => ${this}`);
    console.log('#'.repeat(15));
    return element + element;
}, 10);
console.log(addSelf1);
/*
    Current Element => 1
    Current Index => 0
    Array => 1,2,3,4,5,6
    This => 10
    ###############
    Current Element => 2
    Current Index => 1
    Array => 1,2,3,4,5,6
    This => 10
    ###############
    Current Element => 3
    Current Index => 2
    Array => 1,2,3,4,5,6
    This => 10
    ###############
    Current Element => 4
    Current Index => 3
    Array => 1,2,3,4,5,6
    This => 10
    ###############
    Current Element => 5
    Current Index => 4
    Array => 1,2,3,4,5,6
    This => 10
    ###############
    Current Element => 6
    Current Index => 5
    Array => 1,2,3,4,5,6
    This => 10
    ###############
    New Array => [ 2, 4, 6, 8, 10, 12 ]
*/

console.log('-'.repeat(50));

// Anonymous - Arrow Function:
let addSelf2 = myNums.map(el => el + el);
console.log(addSelf2); // [2, 4, 6, 8, 10, 12];

console.log('-'.repeat(50));

// Named - Regular Function:
function addition(ele) {
    return ele + ele;
}
let addSelf3 = myNums.map(addition);
console.log(addSelf3); // [2, 4, 6, 8, 10, 12];