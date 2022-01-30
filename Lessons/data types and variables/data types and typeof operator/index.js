/*
    - String;
    - number;
    - type: object => name: object;
    - type: object => name: array;
    - Boolean;
    - undefined => type;
    - null => object;
*/

console.log(typeof "Alhiane Lahcen"); // string;
console.log(typeof 12.5); // number;
console.log(typeof 3000); // number;
console.log(typeof {name: "Alhiane", age: 18, country: "Morocco"}); // object;
console.log(typeof ["Lahcen", "Majed", "Latifa"]); // object;
console.log(typeof false); // boolean;
console.log(typeof true); // boolean;

console.log("-".repeat(50));

/*
    * undefined vs null:
        - In JavaScript, undefined is a type, whereas null an object:
        - undefined:
            => It means a variable declared, but no value has been assigned a value.
        - null:
            => null in JavaScript is an assignment value. You can assign it to a variable.
            => null value = empty value.
*/

var name;
console.log(name); // undefined => variable declared with no value;
console.log(typeof name); // undefined;
console.log(variable); // undefined;
var variable = "var"; // access 'variable' before initialization => undefined;

console.log("-".repeat(50));

var number = null; // null value;
var num = ""; // empty value;
console.log(number); // null;
console.log(typeof number); // object;
