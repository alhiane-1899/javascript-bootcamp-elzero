let nums = [2, 12, 11, 5, 10, 1, 99];

let solution = nums.reduce((acc, current) => {
    return current % 2 !== 0 ? acc + current : acc * current;
}, 1);

console.log(solution); // 500;