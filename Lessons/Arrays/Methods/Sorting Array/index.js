/*
    * Arrays Methods [Sort]:
        - sort(Function [Opt])
        - reverse
*/

let myFriends = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];
console.log(myFriends);
// [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];

console.log("-".repeat(50));

console.log(myFriends.sort());
// [-10, -20,10, '10', 100, 20, '90', 9000, 'Mohamed', 'Sayed'];

console.log("-".repeat(50));

console.log(myFriends.reverse());
// ['Sayed', 'Mohamed', 9000, '90', 20, 100, '10', 10, -20, -10];

console.log("-".repeat(50));

// sort => ترتب ترتيب أبجدي و ليس ترتيبا رقميا:
console.log(['B' > 'A']); // true => B(66) > A(65);
console.log(20, 1000); // [20, 1000] => 2 > 1;