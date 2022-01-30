let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1:
console.log(myFriends.slice(undefined, num)); 
// ["Ahmed", "Elham", "Osama"];

console.log('-'.repeat(50));

// Method 2:
myFriends.length = num;
console.log(myFriends); 
// ["Ahmed", "Elham", "Osama"];