/*
    Challenge 1:
*/

let a = 10;
let b = "20";
let c = 80;

// console.log(++a); // 11;
// console.log(+b++); // 20;
// console.log(+c++); // 80;
// console.log(+a++); // 11;
// 11 + 20 + 80 - 11 = 100;
console.log(++a + +b++ + +c++ - +a++); // 100;

console.log('-'.repeat(50));

// console.log(++a); // 13;
// console.log(-b); // -21;
// console.log(+c++); // 81;
// console.log(- -a++); // 13;
// console.log(+a); // 14;
// 13 - 21 + 81 + 13 + 14 = 100;
console.log(++a + -b + +c++ - -a++ + +a); // 100;

console.log('-'.repeat(50));

// console.log(--c); // 81;
// console.log(+b); // 21;
// console.log(--a); // 13;
// console.log(+b++); // 21 => memory(b = 22);
// console.log(+b); // 22;
// console.log(a); // 13;
// console.log(--a); // 12;
// console.log(+true); // 1;
// 81 + 21 + 13 * 21 - 22 * 13 + 12 - 1;
console.log(--c + +b + --a * +b++ - +b * a + --a - +true); // 100;

/*
    * [++a] [+] [+]:
        => [++a]
            - Value: 11;
            - Explain: Pre Increament;
        => [+]
            - Explain: Plus Operator;
    * [+b++] => [+] [b++]:
        => [+]
            - Explain: Unary Plus;
        => [b++]
            - Value: 20;
            - Explain: Post Increament;
    * [+c++] => [+] [c++]:
        => [+]
            - Explain: Unary Plus;
        => [c++]
            - Value: 80;
            - Explain: Post Increament;
    * [- +a++] => [-] [+] [a++]:
        => [-]
            - Explain: Subtract Operator;
        => [+]
            - Explain: Unary Plus;
        => [a++]
            - Value: 10;
            - Explain: Post Increament;
*/

/*
    * [-b] => [-] [b]:
        => [b]
            - Value: -20;
            - Explain: variable;
        => [-]
            - Explain: Negation Operator;
    * [- -a++] => [-] [-a++]:
        => [-]
            - Subtract: Post Increament;
        => [-a++]:
            - [-] => Negation Operator;
            - a++:
                - Value: 10;
                - Explain: Post Increament;
*/

console.log('-'.repeat(50));

/*
    Challenge 2:
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value;
// Do Not Use Variable Twice;

console.log(-d * +e); // 2000;
console.log(++e * ++g + ++f + -d); // 173;