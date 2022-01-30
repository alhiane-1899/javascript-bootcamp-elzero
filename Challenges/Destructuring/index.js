/*
    * Destructuring:
        - Challenge;
*/

let chosen = 2;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

function chosenUser(title, age, available, skillTwo) {
    console.log(`username: ${title}`);
    console.log(`user age: ${age}`);
    console.log(`${!available ? "Not " : ""}Available`);
    console.log(`last skill: ${skillTwo}`);
}

if (chosen === 1) {
    const [{title, age, available, skills: [, skillTwo]}] = myFriends;
    chosenUser(title, age, available, skillTwo);
}

if (chosen === 2) {
    const [, {title, age, available, skills: [, skillTwo]}] = myFriends;
    chosenUser(title, age, available, skillTwo);
}

if (chosen === 3) {
    const [, , {title, age, available, skills: [, skillTwo]}] = myFriends;
    chosenUser(title, age, available, skillTwo);
}