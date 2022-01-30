// // Test Case 1
// var num = 9; // "009";

// // Test Case 2
// var num = 20; // "020";

// Test Case 3
var num = 110; // "110";

console.log(num < 10 ? `00${num}` :
num >= 10 && num < 100 ? `0${num}` :
`${num}`); // 110;