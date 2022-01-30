/*
    * Map Data Type:

    - Methods
        --- set
        --- get
        --- delete
        --- clear
        --- has

    - Properties:
        --- size
*/

// add [key, value] to Map():
let myMap = new Map([
    [10, "Number"],
    ["Name", "String"],
    [false, "Boolean"],
]);

// set(key, value) to Map():
myMap.set({one: 1, two: 2}, "Object");
myMap.set(function doSomething() {}, "Function").set(10.5, "Float");

console.log(myMap);
/*
Map(6) {
    10 => 'Number',
    'Name' => 'String',
    false => 'Boolean',
    { one: 1, two: 2 } => 'Object',
    [Function: doSomething] => 'Function',
    10.5 => 'Float'
}
*/

console.log('-'.repeat(50));

// using kayes => get values from Map();
console.log(myMap.get(10)); // Number;
console.log(myMap.get("Name")); // String;
console.log(myMap.get(false)); // Boolean;

console.log('-'.repeat(50));

// Methods - has():
console.log(myMap.has("Name")); // true;
console.log(myMap.has("Alhiane")); // false;

console.log('-'.repeat(50));

console.log(`Map Size => ${myMap.size}`); // Map Size => 6;

console.log('-'.repeat(50));

console.log(myMap.delete("Name")); // true => deleted;
console.log(myMap.delete("Alhiane")); // false => undefined;
console.log(`Map Size After Deletion Opration => ${myMap.size}`); // 5;

console.log('-'.repeat(50));

myMap.clear();
console.log(`Map Size After Clear Opration => ${myMap.size}`); // 0;