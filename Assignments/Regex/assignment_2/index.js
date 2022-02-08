let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

let regex = /Os\d*O/ig;

console.log(specialNames.match(regex)); // ['Os10O', 'OsO', 'Os100O'];