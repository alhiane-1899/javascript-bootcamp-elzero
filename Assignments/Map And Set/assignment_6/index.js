// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E'];

/*
    - chars => ["A", "B", "C", "D", "E", 10, 15, 6];
    - numbers => [10, 15, 6];
    - letters => ["A", "B", "C", "D", "E"];
    - finalArr => [10, 15, 6, "A", "B", "C", "D", "E"];
    - start => finalArr.indexOf(letters[0]("A")) => 3;
    - end => numbers.length(3) + start(3) => 6;
    - finalArr.copyWithin(0, 3, 6);
    - "A", "B", "C" => replace => 10, 15, 6;
    - ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E'];
*/

// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E'];

/*
    - chars => ["A", "B", "C", 20, "D", "E", 10, 15, 6];
    - numbers => [20, 10, 15, 6];
    - letters => ["A", "B", "C", "D", "E"];
    - finalArr => [20, 10, 15, 6, "A", "B", "C", "D", "E"];
    - start => finalArr.indexOf(letters[0]("A")) => 4;
    - end => numbers.length(4) + start(4) => 8;
    - finalArr.copyWithin(0, 4, 8);
    - "A", "B", "C", "D" => replace => 20, 10, 15, 6;
    - ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E'];
*/

// let chars = ["Z", "Y", "A", "D", "E", 10, 1];
// ["Z", "Y", "Z", "Y", "A", "D", "E"];

/*
    - chars => ["Z", "Y", "A", "D", "E", 10, 1];
    - numbers => [10, 1];
    - letters => ["Z", "Y", "A", "D", "E"];
    - finalArr => [10, 1, "Z", "Y", "A", "D", "E"];
    - start => finalArr.indexOf(letters[0]("Z")) => 2;
    - end => numbers.length(2) + start(2) => 4;
    - finalArr.copyWithin(0, 2, 4);
    - "Z", "Y" => replace => 10, 1;
    - ["Z", "Y", "Z", "Y", "A", "D", "E"];
*/

let numbers = chars.filter(char => typeof char === 'number');

let letters = chars.filter(char => typeof char === 'string');

let finalArr = [...numbers, ...letters];

let start = finalArr.indexOf(letters[0]);

let end = start + numbers.length;

console.log(finalArr.copyWithin(0, start, end));