/*
    - Set vs WeakSet:
    "
        The WeakSet is weak,
        meaning references to objects in a WeakSet are held weakly.
        If no other references to an object stored in the WeakSet exist,
        those objects can be garbage collected.
    "

    --
    Set     => Can Store Any Data Values.
    WeakSet => Collection Of Objects Only.
    --

    --
    Set     => Have Size Property.
    WeakSet => Does Not Have Size Property.
    --

    --
    Set     => Have Keys, Values, Entries.
    WeakSet => Does Not Have clear, Keys, Values And Entries.
    --

    --
    Set     => Can Use forEach.
    WeakSet => Cannot Use forEach.
    --

    Usage: Store objects and removes them once they become inaccessible.
*/

/* 
    - Type Of Data: 
        --- Set Vs WeakSet;
*/

// Can Store Any Data Values:
let mySet = new Set([1, 1, 1, 2, 3, "A", "A", {one: 1, two: 2}]);
console.log(mySet);
// Set(5) { 1, 2, 3, 'A', { one: 1, two: 2 } };

// Collection Of Objects Only:
let myWeakSet = new WeakSet([{ A: 1, B: 2 }, {one: 1, two: 2}]);
console.log(myWeakSet);
// WeakSet { <items unknown> };

console.log("-".repeat(50));

/* 
    - size prop: 
        --- Set Vs WeakSet;
*/

// Have Size Property:
console.log(`Number Of Elements Inside Set Is: ${mySet.size}`); 
// Number Of Elements Inside Set Is: 5;

// Does Not Have Size Property:
console.log(`Number Of Elements Inside Set Is: ${myWeakSet.size}`);
// Number Of Elements Inside Set Is: undefined;

console.log("-".repeat(50));

/*
    - Values + Keys [Alias For Values]:
        --- Set Vs WeakSet;
*/

// Have Keys, Values, Entries:
let setIterator = mySet.keys();
console.log(setIterator.next().value); // 1;
console.log(setIterator.next().value); // 2;
console.log(setIterator.next().value); // 3;
console.log(setIterator.next().value); // A;
console.log(setIterator.next()); // {value: {one: 1, two: 2}, done: false};
console.log(setIterator.next()); // {value: undefined, done: true};

// Does Not Have clear, Keys, Values And Entries:
// let weakSetIterator = myWeakSet.keys();
// Error:  myWeakSet.keys is not a function;

console.log("-".repeat(50));

/*
    - forEach:
        --- Set Vs WeakSet;
*/

// Can Use forEach:
mySet.forEach((el) => console.log(el));
/*
1
2
3
A
{ one: 1, two: 2 }
*/

// Can't Use forEach:
// myWeakSet.forEach((el) => console.log(el));
// Error: myWeakSet.forEach is not a function;