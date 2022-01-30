/*
    - Function ~ Rest Parameters:
        --- Only One Allowed;
        --- Must Be Last Element;
*/

// Rest Parameters => Must Be Last Element (params):
function calc(msg, ...numbers) {
    // console.log(Array.isArray(numbers)); // true;
    let result = 0;
    for (let i = 0; i < numbers.length; i++) result += numbers[i];
    return `${msg} ${result}`;
}

console.log(calc("Final Result Is", 10, 10, 40, 1, -20)); // Final Result Is 41;