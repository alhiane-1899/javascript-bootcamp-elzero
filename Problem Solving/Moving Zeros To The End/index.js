let moveZeros = function (arr) {
    let numbers = arr.filter(zero => zero !== 0);
    let zeros = arr.filter(zero => zero === 0);
    return numbers.concat(zeros);
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));
// [false, 1, 1, 2, 1, 3, "a", 0, 0];

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
// [ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]