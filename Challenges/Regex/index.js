/*
    - Regular Expression - Challenge:
*/

let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';
let url6 = 'https://www.youtube.com/watch?v=i9bc7qsWaKk';

let re = /(https?:\/\/)?(www.)?\w+(.org|.com)(:\d+)?(\/.+)?/ig;

console.log(url1.match(re)); // ["elzero.org"];

console.log('-'.repeat(50));

console.log(url2.match(re)); // ['http://elzero.org'];

console.log('-'.repeat(50));

console.log(url3.match(re)); // ['https://elzero.org'];

console.log('-'.repeat(50));

console.log(url4.match(re)); // ['https://www.elzero.org'];

console.log('-'.repeat(50));

console.log(url5.match(re)); 
// [https://www.elzero.org:8080/articles.php?id=100&cat=topics'];

console.log('-'.repeat(50));

console.log(url6.match(re)); 
// ['https://www.youtube.com/watch?v=i9bc7qsWaKk'];