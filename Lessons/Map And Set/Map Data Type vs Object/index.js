/*
    * Map Data Type:

        - Syntax: new Map(Iterable With Key/Value);

        -- Map vs Object:

        --
        ------ Map => Does Not Contain Key By Default.
        ------ Object => Has Default Keys.
        --

        --
        ------ Map => Key Can Be Anything [Function, Object, Any Primitive Data Types].
        ------ Object => String Or Symbol.
        --

        --
        ------ Map => Ordered By Insertion.
        ------ Object => Not 100% Till Now.
        --

        --
        ------ Map => Get Items By Size.
        ------ Object => Need To Do Manually.
        --

        --
        ------ Map => Can Be Directly Iterated.
        ------ Object => Not Directly And Need To Use Object.keys() And So On.
        --

        --
        ------ Map => Better Performance When Add Or Remove Data.
        ------ Object => Low Performance When Comparing To Map.
        --
*/

// Object => Has Default Keys.
let myObject = {};
let myEmptyObject = Object.create(null);
console.log(myObject); // {Object: not null prototype} => Has Default Keys.
console.log(myEmptyObject); // [Object: null prototype] {} => deos not have Default Keys.

// Map => Does Not Contain Key By Default:
let myMap = new Map(); // {};
console.log(myMap); // Map(0) {};

console.log('-'.repeat(50));

// Object Key => String Or Symbol:
let myNewObject = {
    10: "Number",
    "10": "String",
};
console.log(myNewObject); // {10: "String"};
console.log(myNewObject[10]); // "String";

// Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
let myNewMap = new Map();
myNewMap.set(10, "Number");
myNewMap.set("10", "String");
myNewMap.set(true, "Boolean");
myNewMap.set({a: 1, b: 2}, "Object");
myNewMap.set(function doSomething() {}, "Function");

console.log(myNewMap.get(10)); // Number;
console.log(myNewMap.get("10")); // String;
console.log(myNewMap);
/*
Map(5) {
    10 => 'Number',
    '10' => 'String',
    true => 'Boolean',
    { a: 1, b: 2 } => 'Object',
    [Function: doSomething] => 'Function'
}
*/