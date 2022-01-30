/*
    * Array Methods [Length Of Items]:
        - Length;
*/

// Index Start From 0 [ 0, 1, 2, 3 ];
let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];
// myFriends[6] = "Alhiane"; 
// index 6 out of myFriends indexes range [0, 3];
// console.log(myFriends);
// ['Ahmed', 'Mohamed', 'Sayed', 'Alaa', <2 empty items>, 'Alhiane'];

console.log("-".repeat(50));

// add item end of array:
myFriends[myFriends.length] = "Alhiane";
console.log(myFriends); // ['Ahmed', 'Mohamed', 'Sayed', 'Alaa', 'Alhiane'];

console.log("-".repeat(50));

// chenge last item:
myFriends[myFriends.length - 1] = "Lahcen";
console.log(myFriends); // ['Ahmed', 'Mohamed', 'Sayed', 'Alaa', 'Lahcen'];

console.log("-".repeat(50));

// remove ends items from array:
myFriends.length = 3; // remove last 2 items;
console.log(myFriends); // ['Ahmed', 'Mohamed', 'Sayed'];