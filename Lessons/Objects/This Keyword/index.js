/*
    - Function this Keyword:
        - this Introduction
        - this Inside Object Method
        --- When a function is called as a method of an object,
        --- its this is set to the object the method is called on.
        - Global Object
        - Test Variables With Window And This
        - Global Context
        - Function Context

    -Search
        - Strict Mode
*/

console.log(this); // window;
console.log(this === window); // true;

console.log('-'.repeat(50));

myVar = 100;
console.log(window.myVar); // 100;
console.log(this.myVar); // 100;

console.log('-'.repeat(50));

function sayHello() {
    console.log(this); // window;
    return this;
}
sayHello(); // window;
console.log(sayHello() === window); // true;

console.log('-'.repeat(50));

document.getElementById("cl").onclick = function () {
    console.log(this); // this => clicked button;
};

console.log('-'.repeat(50));

let user = {
    age: 23,
    ageInDays: function () {
        console.log(this); // user: {age: 23, ageInDays: ƒ};
        return this.age * 365; // this => user;
    },
};

console.log(user.age); // 23;
console.log(user.ageInDays()); // 8395;