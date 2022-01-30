/*
    * Function:
        - Anonymous Function => Anonymous Without Name;
        - Calling Named Function vs Anonymous Function
        - Argument To Other Function
        - Task Without Name
        - use cases:
            --- function as argument;
            --- events;
*/

// Anonymous Function:
let calculator = function (num1, num2) {
return num1 + num2;
};
console.log(calculator(10, 20)); // 30;

console.log('-'.repeat(50));

// Calling Named Function:
function sayHello() {
    console.log("Hello Osama");
}
sayHello(); // Hello Osama;

console.log('-'.repeat(50));

// use with events;
document.getElementById("show").onclick = function() {
    console.log("Show");
};

// use with function argument:
setTimeout(function () {
console.log("Good");
}, 2000);calculator(10, 20);