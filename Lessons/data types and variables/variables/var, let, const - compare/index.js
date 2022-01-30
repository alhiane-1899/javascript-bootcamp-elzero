/*
    Var
        - Redeclare (Yes)
        - Access Before Declare (Undefined)
        - Variable Scope Drama (Added To Window)
        - Block Or Scope Function (Function Scope)

    Let
        - Redeclare (No => Error)
        - Access Before Declare (Error)
        - No Variable Scope Drama (Not Added To Window)
        - Block Or Scope Function (Block Scope)

    Const
        - Redeclare (No => Error)
        - Access Before Declare (Error)
        - No Variable Scope Drama (Not Added To Window)
        - Block Or Scope Function (Block Scope)
*/

// var => Redeclare (Yes):
var a = 10;
var a = 20;
console.log(a); // 20;

// let => Redeclare (No => Error):
// let b = 10;
// let b = 20;
// console.log(a); // Identifier 'b' has already been declare;

// const => Redeclare (No => Error):
// const c = 10;
// const c = 20;
// console.log(a); // Identifier 'c' has already been declare;

console.log('-'.repeat(50));

// var => Access Before Declare (Undefined):
console.log(x); // undefined;
var x = 20;

// let => Access Before Declare (Error):
// console.log(y); // Cannot access 'y' before initialization;
// let y = 20;

// // const => Access Before Declare (Error):
// console.log(z); // Cannot access 'z' before initialization;
// const z = 20;

console.log('-'.repeat(50));

// var => Variable Scope Drama [Added To Window]:
var userName1 = "Alhiane";
console.log(window.userName1); // Alhiane;

// let => No Variable  Scope Drama [Not Added To Window]:
let userName2 = "Lahcen";
console.log(window.userName2); // undefined;

// const => No Variable Scope Drama [Not Added To Window]:
const userName3 = "Latifa";
console.log(window.userName3); // undefined;