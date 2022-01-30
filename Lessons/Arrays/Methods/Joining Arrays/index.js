/*
    * Arrays Methods [Joining]:
        - concat(array, array) => Return A New Array;
        - join(Separator);
*/

let myFriends = ["Ahmed", "Sayed"];
let myNewFriends = ["Samar", "Sameh"];
let schoolFriends = ["Haytham", "Shady"];

// concat(array, array) => Return A New Array:
let allFriends = myFriends.concat(myNewFriends, schoolFriends,
"Gameel", ["Alhaine", "Ameer"]);
console.log(allFriends);
// "Ahmed", "Sayed", "Samar", "Sameh", "Haytham", "Shady", "Gameel", "Alhaine", "Ameer"];

console.log('-'.repeat(50));

// join(Separator):
console.log(allFriends.join()); // Separator by default => comma(,);
// Ahmed,Sayed,Samar,Sameh,Haytham,Shady,Gameel,Alhaine,Ameer;
console.log(allFriends.join(""));
// AhmedSayedSamarSamehHaythamShadyGameelAlhaineAmeer;
console.log(allFriends.join(" @ "));
// Ahmed @ Sayed @ Samar @ Sameh @ Haytham @ Shady @ Gameel @ Alhaine @ Ameer;
console.log(allFriends.join("|"));
// Ahmed|Sayed|Samar|Sameh|Haytham|Shady|Gameel|Alhaine|Ameer;
console.log(allFriends.join(" ").toUpperCase());
// AHMED SAYED SAMAR SAMEH HAYTHAM SHADY GAMEEL ALHAINE AMEER;