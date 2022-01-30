/*
    * Destructuring - Destructuring Object:
        --- Naming The Variables;
        --- Add New Property;
        --- Nested Object;
        --- Destructuring The Nested Object Only;
*/

const user = {
    theName: "Osama",
    theAge: 39,
    theTitle: "Developer",
    theCountry: "Egypt",
    skills: {
        html: 70,
        css: 80,
    },
};

// Nested Object:
const {
    // Naming The Variables:
    theName: n,
    theAge: a,
    theCountry,
    // Add New Property:
    theColor: co = "Red", // Red => default value if 'theColor' is undefined;
    skills: { html: h, css },
} = user;

console.log(n); // Osama;
console.log(a); // 39;
console.log(theCountry); // Egypt;
console.log(co); // Red;
console.log(`My HTML Skill Progress Is: ${h}`); // My HTML Skill Progress Is: 70;
console.log(`My CSS Skill Progress Is ${css}`); // My CSS Skill Progress Is: 80;

console.log('-'.repeat(50));

// Destructuring The Nested Object Only:
const { html: skillOne, css: skillTwo } = user.skills;
console.log(`My HTML Skill Progress Is: ${skillOne}`);
// My HTML Skill Progress Is: 70;
console.log(`My CSS Skill Progress Is: ${skillTwo}`);
// My CSScss Skill Progress Is: 80;