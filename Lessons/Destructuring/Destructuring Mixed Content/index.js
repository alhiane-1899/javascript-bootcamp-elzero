/*
    * Destructuring:
        - Destructuring Mixed Content.
*/

const user = {
    theName: "Osama",
    theAge: 39,
    skills: ["HTML", "CSS", "JavaScript"],
    addresses: {
        egypt: "Cairo",
        ksa: "Riyadh",
    },
};

const {
    theName: n,
    theAge: a,
    skills: [, , three],
    addresses: { egypt: e },
} = user;

console.log(`Your Name Is: ${n}`); // Your Name Is: Osama;
console.log(`Your Age Is: ${a}`); // Your Age Is: 39;
console.log(`Your Last Skill Is: ${three}`); // Your Last Skill Is: JavaScript;
console.log(`Your Live In: ${e}`); // Your Live In: Cairo;