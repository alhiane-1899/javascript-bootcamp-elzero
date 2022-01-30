/*
    * Comparison Operators:
        - == Equal
        - != Not Equal

        - === Identical
        - !== Not Identical

        - > Larger Than
        - >= Larger Than Or Equal

        - < Smaller Than
        - <= Smaller Than Or Equal
*/

// == Equal - != Not Equal => Compare Value Only:
console.log(10 == "10"); // true;
console.log(-100 == "-100"); // true;
console.log(10 != "10"); // false;

console.log('-'.repeat(50));

// === Identical - !== Not Identical => Compare Value + Type:
console.log(10 === "10"); // false;
console.log(10 !== "10"); // true;
console.log(10 !== 10); // false;

console.log('-'.repeat(50));

// > Larger Than - >= Larger Than Or Equal:
console.log(10 > 20); // false;
console.log(10 > 10); // false;
console.log(10 >= 10); // true;

console.log('-'.repeat(50));

// < Smaller Than - <= Smaller Than Or Equal:
console.log(10 < 20); // true;
console.log(10 < 10); // false;
console.log(10 <= 10); // true;

console.log('-'.repeat(50));

// make the result => true:
console.log("Osama" === "Ahmed"); // false;
console.log(typeof "Osama" === typeof "Ahmed"); // string === string => true;