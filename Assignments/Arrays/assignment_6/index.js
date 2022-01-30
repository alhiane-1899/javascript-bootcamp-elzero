let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here:
allArrs = arr1.concat(arr2);

console.log(`${allArrs[allArrs.indexOf("F")].toLowerCase()}\
${allArrs[allArrs.indexOf("X")].toLowerCase()}\
${allArrs[allArrs.indexOf("Y")].toLowerCase()}`); 
// fxy;