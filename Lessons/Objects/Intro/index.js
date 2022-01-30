/*
    - Object:
        --- Intro and What Is Object.
        --- Testing Window Object.
        --- Accessing Object.
*/

let user = {
    // Properties:
    theName: "Osama",
    theAge: 38,
    // Methods:
    sayHello: function () {
        return `Hello`;
    },
};

console.log(user); 
// {theName: 'Osama', theAge: 38, sayHello: [Function: sayHello]};

console.log('-'.repeat(50));

console.log(user.theName); // Osama; 

console.log('-'.repeat(50));

console.log(user.theAge); // 38;

console.log('-'.repeat(50));

console.log(user.sayHello()); // Hello;