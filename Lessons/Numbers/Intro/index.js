/*
    Number:
        - Double Precision
        - Syntactic Sugar "_"
        - e
        - **
        - With Decimal
        - Number + BigInt
        - Number Min Value
        - Number Max Value
*/

// JavaScript numbers are always stored as double precision:
console.log(1000000); // 1000000;

console.log('-'.repeat(50));

// Syntactic Sugar "_":
console.log(1_000_000); // 1000000;

console.log('-'.repeat(50));

console.log(1e6); // 1000000 => e + 6(zeros);
console.log(10 ** 6); // 1000000;
console.log(10 * 10 * 10 * 10 * 10 * 10); // 1000000;
console.log(1000000.0); // 1000000;

console.log('-'.repeat(50));

// Number Max Value:
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991;
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308;
console.log(Number.MAX_VALUE + 23434343434); // 1.7976931348623157e+308;

console.log('-'.repeat(50));

// Number MIx Value:
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991;
console.log(Number.MIN_VALUE); // 5e-324;