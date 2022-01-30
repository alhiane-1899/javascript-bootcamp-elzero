/* function findOutlier(integers) {
    let odds = 0, evens = 0, n = 0;
    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 !== 0) odds++
        else evens++;
    }
    if (odds > evens) {
        return +(integers.filter(num => num % 2 === 0).join(""));
    } else {
        return +(integers.filter(num => num % 2 !== 0).join(""));
    }
} */

function findOutlier(integers) {
    let odds = integers.filter(num => num % 2 !== 0);
    let evens = integers.filter(num => num % 2 === 0);
    return evens.length === 1 ? evens[0] : odds[0];
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])); // 11;
// Should return: 11 (the only odd number);

console.log('-'.repeat(50));

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])); // 160;
// Should return: 160 (the only even number);

console.log('-'.repeat(50));

console.log(findOutlier([2, 6, 8, 10, 3])); // 3;
// Should return: 3 (the only odd number);

console.log('-'.repeat(50));

console.log(findOutlier([0, 0, 3, 0, 0])); // 3;
// Should return: 3 (the only odd number);

console.log('-'.repeat(50));

console.log(findOutlier([1, 1, 0, 1, 1])); // 0;
// Should return: 0 (the only even number);