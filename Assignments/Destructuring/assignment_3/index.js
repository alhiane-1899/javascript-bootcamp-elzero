let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring:
let finalArray = arr3.concat(arr2, arr1);
console.log(finalArray);
/* 
['Haytham','Shady','Mahmoud','Mohamed','Gamal','Amir','Ahmed','Sameh','Sayed'];
*/

console.log('-'.repeat(50));

// Write Your Destructuring Assignment Here:
const [, a, b, , , , c] = finalArray;

console.log(`My Best Friends: ${a}, ${b}, ${c}`);
// My Best Friends: Shady, Mahmoud, Ahmed;