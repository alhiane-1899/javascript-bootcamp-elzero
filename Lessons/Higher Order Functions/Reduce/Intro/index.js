/*
    - Reduce:
        --- method executes a reducer function on each element of the array,
        --- resulting in a single output value.

    - Syntax => reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
        --- Accumulator => the accumulated value previously(prev) returned in the last invocation.
        --- Current Val => The current element being processed in the array.
        --- Index => The index of the current element being processed in the array:
            ------ Starts from index 0 if an initialValue is provided.
            ------ Otherwise, it starts from index 1.
        --- Array => The Current Array.
*/

let nums = [10, 20, 15, 30];

let add = nums.reduce(function (acc, current, index, arr) {
    console.log(`Acc => ${acc}`);
    console.log(`Current Element => ${current}`);
    console.log(`Current Element Index => ${index}`);
    console.log(`Array => ${arr}`);
    console.log(acc + current);
    console.log(`#`.repeat(50));
    return acc + current;
}, 0);

console.log(`Result => ${add}`);

/*
Acc => 0
Current Element => 10
Current Element Index => 0
Array => 10,20,15,30
10
##################################################
Acc => 10
Current Element => 20
Current Element Index => 1
Array => 10,20,15,30
30
##################################################
Acc => 30
Current Element => 15
Current Element Index => 2
Array => 10,20,15,30
45
##################################################
Acc => 45
Current Element => 30
Current Element Index => 3
Array => 10,20,15,30
75
##################################################
Result => 75
*/

console.log('-'.repeat(50));

// Exemple => return word with no doublecate Letters:
let word = "woorrd";
let nodoublecateLetters = word
    .split("")
    .reduce((prev, current) => {
        return prev[prev.length - 1] === current ? prev : prev + current;
    });
console.log(nodoublecateLetters); // word;