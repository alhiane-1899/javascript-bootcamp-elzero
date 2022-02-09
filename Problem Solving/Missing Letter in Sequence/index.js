function find_missing_letter_in(string) {
    // all english letters:
    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    // splited string:
    const splitedStr = string.split("");

    // string letters indexes in letters[]:
    const indexes = splitedStr.map(ltr => letters.indexOf(ltr));

    // find missing letter:
    let i = indexes[0];
    while (indexes.includes(i)) i++;

    // check if no missing letter:
    if (indexes.includes(i + 1)) return letters[i]
    else return "No Missing Letter In Sequence";
}

// Testing Ouput:
console.log(find_missing_letter_in("abcdeghi")) // f;
console.log(find_missing_letter_in("defgi")) // h;
console.log(find_missing_letter_in("abc")) // No Missing Letter In Sequence;
console.log(find_missing_letter_in("xyz")) // No Missing Letter In Sequence;
console.log(find_missing_letter_in("tvwxyz")) // u;
console.log(find_missing_letter_in("mnoprs")) // q;
console.log(find_missing_letter_in("tuvwxyz")) // No Missing Letter In Sequence;
console.log(find_missing_letter_in("defghi")) // No Missing Letter In Sequence;