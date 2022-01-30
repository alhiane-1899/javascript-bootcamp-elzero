/*
    * Arrays Methods [Adding And Removing]:
        - unshift("", "") Add Element To The First
        - push("", "") Add Element To The End
        - shift() Remove First Element From Array
        - pop() Remove Last Element From Array
*/

let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];
console.log(myFriends); // ["Ahmed", "Mohamed", "Sayed", "Alaa"];

console.log('-'.repeat(50));

// unshift("", "") Add Element To The First:
myFriends.unshift("Osama", "Nabil");
console.log(myFriends); 
// ["Osama", "Nabil", "Ahmed", "Mohamed", "Sayed", "Alaa"];

console.log('-'.repeat(50));

// push("", "") Add Element To The End:
myFriends.push("Samah", "Eman");
console.log(myFriends); 
// ["Osama", "Nabil", "Ahmed", "Mohamed", "Sayed", "Alaa", "Samah", "Eman"];

console.log('-'.repeat(50));

// shift() Remove First Element From Array:
let first = myFriends.shift();
console.log(myFriends);
// ["Nabil", "Ahmed", "Mohamed", "Sayed", "Alaa", "Samah", "Eman"];
console.log(`First 'Shifted' Element Is ${first}`); 
// First 'Shifted' Element Is Osama;

console.log('-'.repeat(50));

let last = myFriends.pop();
console.log(myFriends); 
// ["Nabil", "Ahmed", "Mohamed", "Sayed", "Alaa", "Samah"];
console.log(`Last 'Poped' Element Is ${last}`);
// Last 'Poped' Element Is Eman;