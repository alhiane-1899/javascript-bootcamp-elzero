/*
    * Variables Intro:
        - What Is Variable ?
        - Why We Use Variables ?
        - Declare A Variable And Use:
        - Syntax ( Keyword | Variable Name | Assignment Operator | Variable Value );
        - Variable Without Var;
        - Multiple Variables In The Same Line;
        - Id And Global Variable;
        - Loosely Typed vs Strongly Typed;
    * Identifiers Name Conventions And Rules:
        - Name Conventions And Rules;
        - Reserved Words => if - for - else - function, ...;
        - naming => camelCase, PascalCase, snake_case, ...;
*/

// Declare A Variable And Use:
var name = "Aicha"; // name = "Alhiane";
console.log(name); // Aicha;
console.log(name); // Aicha;
console.log(name); // Aicha;
console.log(name); // Aicha;

console.log('-'.repeat(50));

// Variable Without Var:
age = 20;
console.log(age); // 20;

console.log('-'.repeat(50));

// Multiple Variables In The Same Line:
var a = 10, b = 20, c = 30;
console.log(`a = ${a}, b = ${b}, c = ${c}`); // a = 10, b = 20, c = 30;

console.log('-'.repeat(50));

// Id And Global Variable:
console.log(hello); // <div id="hello">Hello Alhiane</div>;
hello.innerHTML = "Hello World!"; // Hello Alhiane => Hello World;
console.log(hello.innerHTML); // Hello World!

/*
    * Loosely Typed vs Strongly Typed:
        - In programming we call a language loosely typed when you don’t have to explicitly specify types of variables and objects.
        - A strongly typed language on the contrary wants types specified.
*/

console.log('-'.repeat(50));

// Name Conventions And Rules:
// var 1variable = 10; // var deosn't starts with number;
var variable1 = 10; // you can put number in middle or last of variable name;
var $var_iable = 10;
var _var_1$ = 10;
var user = "Alhiane"; // !not => var USER = "Alhiane";
// var if = 10; // من الكلمات المحجوزة للغة;

console.log('-'.repeat(50));

// naming:
var user_name = "Alhiane"; // snake_case;
var userName = "Alhiane"; // camelCase;
var UserName = "Alhiane"; // PascalCase;