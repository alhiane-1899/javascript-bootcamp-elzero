/*
    *Destructuring:
        - Destructuring Function Parameters
*/

const user = {
    theName: "Osama",
    theAge: 39,
    skills: {
        html: 70,
        css: 80,
    },
};

showDetails(user);

// without Destructuring Function Parameters:
// function showDetails(obj) {
//     console.log(`Your Name Is ${obj.theName}`);
//     console.log(`Your Age Is ${obj.theAge}`);
//     console.log(`Your CSS Skill Progress Is ${obj.skills.css}`);
// }


// with Destructuring Function Parameters:
function showDetails({ theName: n, theAge: a, skills: { css: c } } = user) {
    console.log(`Your Name Is ${n}`);
    console.log(`Your Age Is ${a}`);
    console.log(`Your CSS Skill Progress Is ${c}`);
}

/*
    Your Name Is Osama.
    Your Age Is 39.
    Your CSS Skill Progress Is 80.
*/