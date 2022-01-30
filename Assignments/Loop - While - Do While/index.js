let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while (true) {

    index++; // index = 1;

    if (index === friends.length) break;

    if (typeof friends[index] === 'string' && friends[index][0] === "A") {
        continue;
    }

    if (typeof friends[index] === 'number') continue;

    console.log(`${counter + 1} => ${friends[index]}`);

    counter++;

}

/*
    // Output:
        - "1 => Sayed";
        - "2 => Mahmoud";
*/