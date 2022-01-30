/*
    - Object:
        --- Create With New Keyword new Object();
*/

let user = new Object({
    age: 38,
});

console.log(user); // {age: 20};

user.age = 23; // update age property: 38 => 23;

user["country"] = "Morocco"; // add new property - "country": "Morocco";

user.sayHello = function () {
    return `Hello`;
}; // // add new method - sayHello();

console.log(user); 
// { age: 23, country: 'Morocco', sayHello: [Function (anonymous)] };

console.log(user.age); // 23;

console.log(user.country); // Morocco;

console.log(user.sayHello()); // Hello;