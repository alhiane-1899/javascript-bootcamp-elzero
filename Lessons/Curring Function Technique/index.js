/*
    - Curring Function Technique => A lot cleaner and easier to read:
        --- Regular Function;
        --- Arrow Function;
        --- unCurry => from crrying => unCurrying;
*/

// Regular Function:
function addNumber(x) { // add5;
    return function (y) { // add10;
        return function (z) { // add15;
            return x + y + z;
        };
    };
}

const add5 = addNumber(5); // x = 5;
const add10 = add5(10); // y = 10;
const add15 = add10(15); // z = 15;

console.log('Returns', add15); // Returns 30;
console.log('Returns', addNumber(5)(10)(15)); // Returns 30;

console.log('-'.repeat(50));

// Arrow Function:
let addNumber2 = x => y => z => x + y + z;

const add30 = addNumber2(30); // x = 30;
const add60 = add30(60); // y = 60;
const add90 = add60(90); // z = 90;

console.log('Returns', add90); // Returns 180;
console.log('Returns', addNumber2(30)(60)(90)); // Returns 180;

console.log('-'.repeat(50));

const randomNumbers = [4, 6, 2, 3];

const mapFilterGivenArray = (x) => (y) => (z) => (d) =>
    x
    .map((item) => item * y)
    .filter((number) => !(number % z))
    // .reduce((prev, current) => prev + current, d);
    .reduce((prev, current) => prev + current, d);

console.log("Returns " + mapFilterGivenArray(randomNumbers)(2)(3)(4)); 
// Returns 22;

/*
    x(randomNumbers = [4, 6, 2, 3])
    .map((item) => item * y(2)) => [8, 12, 4, 6];
    .filter((number) => !(number % z(3))) => [12, 6];
    .reduce((prev, current) => prev + current, d):
        --- => d-4(initial value) + current(12) = 16(prev) + current(6) = 22;
*/

console.log('-'.repeat(50));

// unCurry => from crrying => unCurrying:
const unCurry = (x, y, z, d) => mapFilterGivenArray(x)(y)(z)(d);
console.log(`Returns ${unCurry(randomNumbers, 2, 3, 4)}`); // Returns 22;