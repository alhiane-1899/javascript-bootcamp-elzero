/*
    Arithmetic Operators:
        + Addition
        - Subtraction
        * Multiplication
        / Division
        ** Exponentiation (ES7)
        % Modulus (Division Remainder)
        ++ Increment [ Post / Pre ]
        -- Decrement [ Post / Pre ]
*/

// Addition:
console.log(10 + 20); // 30;
console.log(10 + "Osama"); // 10Osama => concat;

console.log('-'.repeat(50));

// Subtraction:
console.log(10 - 20); // -10;
console.log(10 - "Osama"); // NaN;
console.log(typeof NaN); // number;

console.log('-'.repeat(50));

// Multiplication:
console.log(10 * 20); // 200;
console.log(10 * -20); // -200;

console.log('-'.repeat(50));

// Division:
console.log(20 / 5); // 4;
console.log(20 / 3); // 6....

console.log('-'.repeat(50));

// Exponentiation (ES7):
console.log(2 ** 4); // 2 ouss 4 = 16;
console.log(2 * 2 * 2 * 2); // 16;

console.log('-'.repeat(50));

// Modulus:
console.log(10 % 2); // 0;
console.log(11 % 2); // Remove 1 => 1;

console.log('-'.repeat(50));

// Increment - postfix:
let num1 = 1;
console.log(num1++); // 1 => print => add 1;
console.log(num1); // 2;

console.log('-'.repeat(50));

// Increment - prefix:
let num2 = 1;
console.log(++num2); // 2 => add 1 => print;

console.log('-'.repeat(50));

// Decrement - postfix:
let num3 = 1;
console.log(num3--); // 1 => print => minus 1;
console.log(num3); // 0;

console.log('-'.repeat(50));

// Decrement - prefix:
let num4 = 1;
console.log(--num4); // 0 => minus 1 => print;
