/*
    - Use Strict:
        --- Defines that JavaScript code should be executed in "strict mode".
        --- The "use strict" directive was new in ECMAScript version 5.
        --- The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
        --- With strict mode, you can not, for example, use undeclared variables.
        --- All modern browsers support "use strict" except Internet Explorer 9 and lower.
        --- You can use strict mode in all your programs. It helps you to write cleaner code, like preventing you from using undeclared variables.
        --- "use strict" is just a string, so IE 9 will not throw an error even if it does not understand it.
        --- Strict mode is declared by adding "use strict"; to the beginning of a script or a function.
        --- Declared at the beginning of a script, it has global scope (all code in the script will execute in strict mode):
        --- Declared inside a function, it has local scope (only the code inside the function is in strict mode):
        
    - Why Strict Mode ?
        --- Strict mode makes it easier to write "secure" JavaScript.
        --- Strict mode changes previously accepted "bad syntax" into real errors.
        --- In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.
        --- In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.
*/

// "use strict";

// x = 3.14; // This will cause an error because x is not declared;

// myFunction();
// function myFunction() {
//   y = 3.14;   // This will also cause an error because y is not declared
// }

// x = 3.14; // This will not cause an error.

// myFunction();

// function myFunction() {
//     "use strict";
//     y = 3.14;   // This will cause an error
// }

// this:

// function myFunction() {
//     console.log(this);
// }
// myFunction(); // window;

// function myFunction() {
//     "use strice";
//     console.log(this);
// }
// myFunction(); // undefined;