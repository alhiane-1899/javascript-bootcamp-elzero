/*
    - Regular Expression - Quantifiers:
        --- n+    => One Or More.
        --- n*    => zero or more.
        --- n?    => zero or one.
        --- n{x}   => Number of.
        --- n{x,y} => Range.
        --- n{x,}  => At Least x.
        --- $  => End With Something.
        --- ^  => Start With Something.
        --- ?= => Followed By Something.
        --- ?! => Not Followed By Something.
*/

// n+ => One Or More:
let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
// let mailsRe = /\w+@\w+.(com|net)/ig;
let mailsRe = /\w+@\w+.\w+/ig;
console.log(mails.match(mailsRe));
// ["o@nn.sa", "osama@gmail.com", "elzero@gmail.net", "osama@mail.ru"];

console.log('-'.repeat(50));

// n* => zero or more:
let nums = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
let numsRe = /0\d*0/ig;
console.log(nums.match(numsRe));
// ["0110", "05120", "0560", "00"];

console.log('-'.repeat(50));

// n? => zero or one:
let urls = "https://google.com http://www.website.net web.com"; // http + https
let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/ig;
console.log(urls.match(urlsRe));
// ['https://google.com', 'http://www.website.net', 'web.com'];

console.log('-'.repeat(50));

let serials = "S100S S3000S S50000S S9500700S s123456s";

// n{x} => Number of:
console.log(serials.match(/s\d{3}s/ig)); // S[Three Number]S;
// ["S100S"];

console.log('-'.repeat(50));

// n{x,y} => Range:
console.log(serials.match(/s\d{4,6}s/ig)); // S[Four Or Five Or Sex Number]S.
// ["S3000S", "S50000S", "s123456s"];

console.log('-'.repeat(50));

// n{x,} => At Least x:
console.log(serials.match(/s\d{4,}s/ig)); // S[At Least Four]S.
// ["S3000S", "S50000S", "S9500700S", "s123456s"];

console.log('-'.repeat(50));

let myString = "We Love Programming";
let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

// End With Something:
console.log(/ing$/ig.test(myString)); // true;
console.log(/lz$/ig.test(names)); // true;

console.log('-'.repeat(50));

// Start With Something:
console.log(/^we/ig.test(myString)); // true;
console.log(/^\d/ig.test(names)); // true;

console.log('-'.repeat(50));

// ?= => Followed By Something:
console.log(names.match(/\d\w{5}(?=Z)/ig)); // ["1Osama", "2Ahmed", "5GamalZ"];

console.log('-'.repeat(50));

// Not Followed By Something:
console.log(names.match(/\d\w{8}(?!Z)/ig)); // ["3Mohammed"];