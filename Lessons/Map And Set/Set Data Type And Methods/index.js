/*
    - Set Data Type:
        -- Syntax: new Set(Iterable)
        -- Object To Store Unique Values
        -- Cannot Access Elements By Index

    - Properties:
        -- size

    - Methods:
        -- add
        -- delete
        -- clear
        -- has
*/

// Array vs Set:
let myData = [1, 1, 1, 2, 3, "A"];
let myUniqueData1 = new Set([1, 1, 1, 2, 3, 'A']);
console.log(myData); // [ 1, 1, 1, 2, 3, 'A' ];
console.log(myUniqueData1); // Set(4) { 1, 2, 3, 'A' };

console.log('-'.repeat(50));

// size Property:
console.log(`uniqueData Set size is => ${myUniqueData1.size} elements`);
// uniqueData Set size is => 4 elements;

console.log('-'.repeat(50));

// Methods - add():
let myUniqueData2 = new Set();
myUniqueData2.add(1).add(1).add(1);
myUniqueData2.add(2).add(3).add("A");
console.log(myUniqueData2); // Set(4) { 1, 2, 3, 'A' };

console.log('-'.repeat(50));

// Methods - has():
let myUniqueData3 = new Set().add(1).add(1).add(1).add(2).add(3).add('A');
console.log(`Is Set Has 'A' value => ${myUniqueData3.has("a".toUpperCase())}`);
// Is Set Has 'A' value => true;

console.log('-'.repeat(50));

// Cannot Access Set Elements By Index:
console.log(myData[0]); // 1;
console.log(myUniqueData3[0]); // undefined;

console.log('-'.repeat(50));

// Methods - delete():
// myUniqueData.delete(2);
console.log(myUniqueData3.delete(2)); // true => deleted;
console.log(myUniqueData3); // Set(3) { 1, 3, 'A' };
console.log(myUniqueData3.size); // 3;

console.log('-'.repeat(50));

// Methods - clear():
myUniqueData3.clear();
console.log(myUniqueData3); // Set(0) {};
console.log(myUniqueData3.size); // 0;