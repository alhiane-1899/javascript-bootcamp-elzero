let start = 0;
let swappedName = "elZerO";
let newStr = '';

for (let i = start; i < swappedName.length; i++) {
    if (swappedName[i] === swappedName[i].toUpperCase()) {
        newStr += swappedName[i].toLowerCase();
    } else {
        newStr += swappedName[i].toUpperCase();
    }
}

console.log(newStr); // ELzERo;

/*
    * Output:
        - "ELzERo";
*/