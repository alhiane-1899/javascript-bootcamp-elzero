/*
    * Function:
        - Arrow Function:
            -- Regular vs Arrow [Param + No Param]
            -- Multiple Lines
*/

// Regular Function:
let print = function () {
    return 10;
};

// Arrow Function:
let print2 = () => 10;
let print3 = _ => 10;

// Regular Function - params:
let print4 = function (num) {
    return num;
};
let print6 = function (num1, num2) {
    return num1 + num2;
};

// Arrow Function - params:
let print5 = num => num;
let print = (num1, num2) => num1 + num2;