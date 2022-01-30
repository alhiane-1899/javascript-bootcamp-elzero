let myString = "EElllzzzzzzzeroo";

let solution = myString.split("")
    .filter((el, index) => {
        return myString[index] !== myString[index + 1] ? el : "";
    })
    .reduce((prev, current) => prev + current);

console.log(solution); // Elzero;