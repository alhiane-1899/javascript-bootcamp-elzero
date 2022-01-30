/*
    * Function:
        - Default Function Parameters
        - Function Parameters Default [Undefined]
        - Old Strategies [Condition + Logical Or]
        - ES6 Method
*/

function sayHello(username = "Unknown", age = "Unknown") { // ES6 Method;
    /*
        * Condition:
            - if (age === undefined) age = "Unknown";
        * Logical Or:
            -- age = age || "Unknown";
    */
    return `Hello ${username} Your Age Is ${age}`;
}

console.log(sayHello("Alhiane")); // Hello Alhiane Your Age Is Unknown;