function descendingOrder(n){
    return Number(n.toString().split("").sort().reverse().join(""));
}

console.log(descendingOrder(42145)); // 54421;
console.log(descendingOrder(145263)); // 654321;
console.log(descendingOrder(123456789)); // 987654321;
console.log(descendingOrder(0)); // 0;
console.log(descendingOrder(1)); // 1;