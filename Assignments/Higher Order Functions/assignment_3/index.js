let myArray = ["E", "l", "z", ["e", "r"], "o"];

let solution = myArray.splice("")
    .reduce((prev, current) => {
        return Array.isArray(current) ?
        prev + current.join("") :
        prev + current;
    }); 

console.log(solution); // Elzero;