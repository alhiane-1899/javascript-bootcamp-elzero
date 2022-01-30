let isPalindrome = function(x) {
    let str = x.toString().split("").reverse().join("");
    if (str === x.toString()) {
        return true
    } else {
        return false;
    };
};

console.log(isPalindrome(10));