/*
    * String Methods - Part 1:
        - Access With Index
        - Access With charAt()
        - length
        - trim()
        - toUpperCase()
        - toLowerCase()
        - Chain Methods
*/

let theName = "  Ahmed  ";

// Access With Index:
console.log(theName); //  Ahmed  ;
console.log(theName[3]); // h;
console.log(theName[5]); // e;
console.log(theName[9]); // undefined;

console.log('-'.repeat(50));

// Access With charAt():
console.log(theName.charAt(1)); // space;
console.log(theName.charAt(5)); // e;
console.log(theName.charAt(9)); // empty value;

console.log('-'.repeat(50));

// length:
console.log(theName.length); // 9;

console.log('-'.repeat(50));

// trim start and end spaces:
console.log(theName.trim().length); // 5;

console.log('-'.repeat(50));

// toUpperCase - toLowerCase:
console.log(theName.trim().toUpperCase()); // AHMED;
console.log(theName.trim().toLowerCase()); // ahmed;

console.log('-'.repeat(50));

// Chain Methods:
console.log(theName.trim().charAt(2).toUpperCase()); // M;

console.log('-'.repeat(50));

/*
    * String Methods - Part 2:
        - indexOf(Value [Mand], Start [Opt] 0)
        - lastIndexOf(Value [Mand], Start [Opt] Length)
        - slice(Start [Mand], End [Opt] Not Include End)
        - repeat(Times) [ES6]
        - split(Separator [Opt], Limit [Opt])
*/

let x = "Elzero Web School";

// indexOf(Value [Mand], Start [Opt] 0):
console.log(x.indexOf("Web")); // 7;
console.log(x.indexOf("Web", 8)); // -1;
console.log(x.indexOf("o")); // 5;

console.log('-'.repeat(50));

// lastIndexOf(Value [Mand], Start [Opt] Length):
console.log(x.lastIndexOf("o")); // 15;

console.log('-'.repeat(50));

// slice(Start [Mand], End [Opt] Not Include End):
console.log(x.slice(2, 6)); // zero;
console.log(x.slice(-5)); // chool;
console.log(x.slice(-5, -3)); // ch;

console.log('-'.repeat(50));

// repeat(Times) [ES6]:
console.log(x.repeat(3)); // Elzero Web SchoolElzero Web SchoolElzero Web School;

console.log('-'.repeat(50));

// split(Separator [Opt], Limit [Opt]):
console.log(x.split("", 6)); // [ E, l, z, e, r, o ];
console.log(x.split(" ")); // [ 'Elzero', 'Web', 'School' ];

/*
    * String Methods - Part 3:
        - substring(Start [Mand], End [Opt] Not Including End):
            --- Start > End Will Swap
            --- Start < 0 It Start From 0
            --- Use Length To Get Last Character
        - substr(Start [Mand], Characters To Extract):
            --- Start >= Length = ""
            --- Negative Start From End
        - includes(Value [Mand], Start [Opt] Default 0) [ES6]
        - startsWith(Value [Mand], Start [Opt] Default 0) [ES6]
        - endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
*/

console.log('-'.repeat(50));

let a = "Elzero Web School";

console.log(a.length); // 17;

console.log('-'.repeat(50));

// substring(Start [Mand], End [Opt] Not Including End):
console.log(a.substring(2, 6)); // zero;
// Start > End Will Swap:
console.log(a.substring(6, 2)); // swap => (2, 6) => zero;
// Start < 0 It Start From 0:
console.log(a.substring(-10, 6)); // 0 - 6 => Elzero;
// Use Length To Get Last Character:
console.log(a.substring(a.length - 5, a.length - 3)); // ch;

console.log('-'.repeat(50));

// substr(Start [Mand], Number Of Characters To Extract):
console.log(a.substr(0, 6)); // Elzero;
// Start >= Length = "":
console.log(a.substr(17)); // "" => empty value;
//  Negative Start From End:
console.log(a.substr(-3)); // ool;
console.log(a.substr(-5, 2)); // ch;

console.log('-'.repeat(50));

// includes(Value [Mand], Start [Opt] Default 0) [ES6]:
console.log(a.includes("Web")); // true;
console.log(a.includes("Web", 8)); // false;

console.log('-'.repeat(50));

// startsWith(Value [Mand], Start [Opt] Default 0) [ES6]:
console.log(a.startsWith("E")); // true;
console.log(a.startsWith("E", 2)); // false;
console.log(a.startsWith("zero", 2)); // true;

console.log('-'.repeat(50));

// endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]:
console.log(a.endsWith("l")); // true;
console.log(a.endsWith("Web", a.length - 5)); // false;