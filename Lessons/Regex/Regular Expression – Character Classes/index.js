/*
    - Regular Expression - Character Classes:
        --- . => matches any character, except newline or other line terminators.
        --- \w => matches word characters. [a-z, A-Z, 0-9 And Underscore].
        --- \W => matches Non word characters.
        --- \d => matches digits from 0 to 9.
        --- \D => matches non-digit characters.
        --- \s => matches whitespace character.
        --- \S => matches non whitespace character.
        --- \b => matches at the beginning or end of a word.
        --- \B => matches NOT at the beginning/end of a word.

    - Test Method:
        --- pattern.test(input).
*/

let email = 'O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com';

// . => matches any character, except newline or other line terminators:
let dot = /./g;
console.log(email.match(dot));
/*
    [
        'O', '@', '@', '@', 'g', '.', '.', '.', 'c',
        'o', 'm', ' ', 'O', '@', 'g', '.', 'c', 'o',
        'm', ' ', 'O', '@', 'g', '.', 'n', 'e', 't',
        ' ', 'A', '@', 'Y', '.', 'c', 'o', 'm', ' ',
        'O', '-', 'g', '.', 'c', 'o', 'm', ' ', 'o',
        '@', 's', '.', 'o', 'r', 'g', ' ', '1', '@',
        '1', '.', 'c', 'o', 'm'
    ]
*/

console.log('-'.repeat(50));

// \w => matches word characters. [a-z, A-Z, 0-9 And Underscore(_)]:
let wordChars = /\w/g;
console.log(email.match(wordChars));
/*
    [
        'O', 'g', 'c', 'o', 'm', 'O', 'g',
        'c', 'o', 'm', 'O', 'g', 'n', 'e',
        't', 'A', 'Y', 'c', 'o', 'm', 'O',
        'g', 'c', 'o', 'm', 'o', 's', 'o',
        'r', 'g', '1', '1', 'c', 'o', 'm'
    ]
*/

console.log('-'.repeat(50));

// \W => matches Non word characters:
let NotWordChars = /\W/g;
console.log(email.match(NotWordChars));
/*
    [
        '@', '@', '@', '.', '.',
        '.', ' ', '@', '.', ' ',
        '@', '.', ' ', '@', '.',
        ' ', '-', '.', ' ', '@',
        '.', ' ', '@', '.'
    ]
*/

console.log('-'.repeat(50));

// \d => matches digits from 0 to 9:
let digits = /\d/g;
console.log(email.match(digits));
// [ '1', '1' ];

console.log('-'.repeat(50));

// \D => matches non-digit characters:
let nonDigits = /\D/g;
console.log(email.match(nonDigits));
/*
    [
        'O', '@', '@', '@', 'g', '.', '.', '.',
        'c', 'o', 'm', ' ', 'O', '@', 'g', '.',
        'c', 'o', 'm', ' ', 'O', '@', 'g', '.',
        'n', 'e', 't', ' ', 'A', '@', 'Y', '.',
        'c', 'o', 'm', ' ', 'O', '-', 'g', '.',
        'c', 'o', 'm', ' ', 'o', '@', 's', '.',
        'o', 'r', 'g', ' ', '@', '.', 'c', 'o',
        'm'
    ]
*/

console.log('-'.repeat(50));

// \s => matches whitespace character:
let whitespace = /\s/g;
console.log(email.match(whitespace));
// [' ', ' ', ' ', ' ', ' ', ' '];

console.log('-'.repeat(50));

// \S => matches non whitespace character:
let nonWhitespace = /\S/g;
console.log(email.match(nonWhitespace));
/*
    [
        'O', '@', '@', '@', 'g', '.', '.', '.',
        'c', 'o', 'm', 'O', '@', 'g', '.', 'c',
        'o', 'm', 'O', '@', 'g', '.', 'n', 'e',
        't', 'A', '@', 'Y', '.', 'c', 'o', 'm',
        'O', '-', 'g', '.', 'c', 'o', 'm', 'o',
        '@', 's', '.', 'o', 'r', 'g', '1', '@',
        '1', '.', 'c', 'o', 'm'
    ]
*/

console.log('-'.repeat(50));

// practice:
let validEmail = /\w@\w.(com|net)/g;
console.log(email.match(validEmail));
// ['O@g.com', 'O@g.net', 'A@Y.com', '1@1.com'];

console.log('-'.repeat(50));

let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";

// \b => matches at the beginning or end of a word:
let onBeginningOrEnd = /(\bspam|spam\b)/ig;
console.log(names.match(onBeginningOrEnd));
// ['Spam', 'Spam', 'Spam', 'Spam', 'Spam'];

console.log('-'.repeat(50));

// \B => matches NOT at the beginning/end of a word:
let notOnBeginningOrEnd = /\Bspam/ig;
console.log(names.match(notOnBeginningOrEnd));
// ['Spam', 'Spam', 'Spam', 'spam'];

console.log('-'.repeat(50));

// test method:
console.log(onBeginningOrEnd.test(names)); // true;
console.log(/(\bspam|spam\b)/ig.test("Osama")); // false;
console.log(/(\bspam|spam\b)/ig.test("1Spam")); // true;
console.log(/(\bspam|spam\b)/ig.test("Spam1")); // true;