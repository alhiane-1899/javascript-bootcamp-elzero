let theNumber = 100020003000;

let solution = Array.from(new Set([...theNumber.toString()]), el => {
    return el !== "0" ? el : "";
}).join("");

console.log(solution); // 123;