/*
    Type Coercion (Type Casting) = التحويل بالإكراه:
        - +
        - -
        - "" - 2
        - false - true
*/

let a = "100";
let b = 20;
let c = true;
let d = false;

console.log(a + b + c); // 10020true => "100" + 20 = 10020;

console.log('-'.repeat(50));

console.log(a + b); // 10020 => string (+ here is concat operator);

console.log('-'.repeat(50));

console.log(+a + b + c); // 100 + 20 + true(1) = 121;

console.log('-'.repeat(50));

console.log(10 - "20"); // -10 ("20" => 20: Type Coercion);

console.log('-'.repeat(50));

console.log("10" - true); // 9 => Type Coercion: 10 - 1 = 9;

console.log('-'.repeat(50));

console.log("" + 10); // 10 => Type Coercion: "" => `null = 0`;

console.log('-'.repeat(50));

console.log(false * true); // 0 => Type Coercion: true(1) * false(0) = 0;

console.log('-'.repeat(50));

console.log(0xff + 1); // 256 => Type Coercion: 0xff(255) + 1 = 256;