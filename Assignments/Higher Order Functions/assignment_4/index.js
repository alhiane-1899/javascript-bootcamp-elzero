let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let solution = numsAndStrings
    .filter(el => !isNaN(+el))
    .map(el => -el);

console.log(solution); // [-1, -10, 10, 20, -5, -3];