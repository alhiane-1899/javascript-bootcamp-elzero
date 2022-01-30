/*
    Loop - For:
        - Loop On Sequences
*/

let myFriends = [1, 2, "Osama", "Ahmed", 3, 4, "Sayed", 6, "Ali"];
console.log(myFriends); // [1, 2, "Osama", "Ahmed", 3, 4, "Sayed", 6, "Ali"];

console.log('-'.repeat(50));

let onlyNames = [];
for (let i = 0; i < myFriends.length; i++) {
    if (typeof myFriends[i] === "string") {
        onlyNames.push(myFriends[i]);
    }
}
console.log(onlyNames); // ["Osama", "Ahmed", "Sayed", "Ali"];

console.log('-'.repeat(50));

console.log(myFriends[0]); // 1;
console.log(myFriends[1]); // 2;
console.log(myFriends[2]); // Osama;
console.log(myFriends[3]); // Ahmed;
console.log(myFriends[4]); // 3;

console.log('-'.repeat(50));

for (let i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i]);
}
/*
1
2
Osama
Ahmed
3
4
Sayed
6
Ali
*/