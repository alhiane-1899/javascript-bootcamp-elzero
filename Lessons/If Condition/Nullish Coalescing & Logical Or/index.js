/*
    * Logical Or ||
        -- Null + Undefined + Any Falsy Value;
    * Nullish Coalescing Operator ??:
        -- Null + Undefined;
*/

console.log(Boolean(300)); // true;
console.log(Boolean(-300)); // true;
console.log(Boolean(20)); // true;
console.log(Boolean(0)); // false;
console.log(Boolean("")); // false;
console.log(Boolean(null)); // false;
console.log(Boolean(undefined)); // false;

console.log('-'.repeat(50));

// Logical Or || => Null + Undefined + 0 + "" + Any Falsy Value:
var price = 0;
console.log(`The Price Is $${price || 200}`); // The Price Is $200;
var price = "";
console.log(`The Price Is $${price || 200}`); // The Price Is $200;
var price;
console.log(`The Price Is $${price || 200}`); // The Price Is $200;
var price = null;
console.log(`The Price Is $${price || 200}`); // The Price Is $200;
var price = 300;
console.log(`The Price Is $${price || 200}`); // The Price Is $300;

console.log('-'.repeat(50));

// Nullish Coalescing Operator ?? => Null + Undefined:
var students = 20;
console.log(`Number Of Students Is ${students ?? 20} Student`);
// Number Of Students Is 20 Student;
var students = 0;
console.log(`Number Of Students Is ${students ?? 20} Student`);
// Number Of Students Is 0 Student;
var students = undefined;
console.log(`Number Of Students Is ${students ?? 20} Student`);
// Number Of Students Is 20 Student;
var students = null;
console.log(`Number Of Students Is ${students ?? 20} Student`);
// Number Of Students Is 20 Student;