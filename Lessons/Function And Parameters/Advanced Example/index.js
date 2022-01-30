/*
    Function Advanced Examples:
*/

// Exemple 1:
function sayHello(userName, age) {
    if (age < 20) {
        console.log(`App is Not Suitable For You`);
    } else {
        console.log(`Hello ${userName} Your Age is ${age}`);
    }
}
sayHello("Osama", 38); // Hello Osama Your Age is 38;
sayHello("Sayed", 40); // Hello Sayed Your Age is 40;
sayHello("Ali", 18); // App is Not Suitable For You;

console.log('-'.repeat(50));

// Exemple 2:
function generateYears(start, end, exclude) {
    for (let i = start; i <= end; i++) {
        if (i === exclude) continue;
        console.log(i);
    }
}
generateYears(1998, 2022, 2019);
/*
1998
1999
2000
2001
2002
2003
2004
2005
2006
2007
2008
2009
2010
2011
2012
2013
2014
2015
2016
2017
2018
2020
2021
2022
*/