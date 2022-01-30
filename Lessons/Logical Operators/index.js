/*
    * Logical Operators:
        - ! Not
        - && And
        - || Or
*/

// ! Not:
console.log(!false); // true;
console.log(!true); // false;
console.log(!(10 == "10")); // false;

console.log('-'.repeat(50));

// && And:
console.log(10 == "10" && 10 > 8 && 10 > 50); // false;
console.log(10 == "10" && 10 > 8); // true && true => true;
console.log(10 === "10" && 10 > 8); // false && true => false;
console.log(10 != "10" && 8 > 10); // false && false => false;

console.log('-'.repeat(50));

// || Or:
console.log(10 == "10" || 10 > 8 || 10 > 50); // true;
console.log(10 == "10" || 10 > 8); // true || true => true;
console.log(10 === "10" || 10 > 8); // false && true => true;
console.log(10 != "10" || 8 > 10); // false && false => false;