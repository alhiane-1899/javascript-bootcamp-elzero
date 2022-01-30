let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);
// Needed Output:
console.log(setOfNumbers); // Set(3) {10, 20, 2};
console.log([...setOfNumbers][setOfNumbers.size - 1]); // 2;