let numberOne = 10,
    numberTwo = 20;

console.log(numberOne + "" + numberTwo); 
// Normal Concatenate => 1020;

console.log('-'.repeat(50));

console.log(typeof(numberOne + "" + numberTwo)); 
// Normal Concatenate => String;

console.log('-'.repeat(50));

console.log(`${numberOne}${numberTwo}`); 
// Template Literals Way => 1020;

console.log('-'.repeat(50));

console.log(typeof `${numberOne}${numberTwo}`); 
// Template Literals Way => String;

console.log('-'.repeat(50));

console.log(numberOne + "\n" + numberTwo);
/*
    Normal Concatenate
    20
    10
*/

console.log('-'.repeat(50));

console.log(`10
20`);
/*
    Template Literals Way
    20
    10
*/