let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let solution = mix.splice("")
    .map(el => isNaN(+el) ? el : "")
    .reduce((prev, current) => `${prev}${current}`);

console.log(solution) // Elzero;