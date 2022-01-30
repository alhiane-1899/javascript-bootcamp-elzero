let romanToInt = function(s) {
    const romanHash = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let result = 0;
    for(let i = 0; i < s.length; i++) {
        if (s[i] === "I" && s[i + 1] === "V") {
            result += 4;
            i++;
        } else if (s[i] === "I" && s[i + 1] === "X") {
            result += 9;
            i++;
        } else if (s[i] === "X" && s[i + 1] === "L") {
            result += 40;
            i++;
        } else if (s[i] === "X" && s[i + 1] === "C") {
            result += 90;
            i++;
        } else if (s[i] === "C" && s[i + 1] === "D") {
            result += 400;
            i++;
        } else if (s[i] === "C" && s[i + 1] === "M") {
            result += 900;
            i++;
        } else {
            result += romanHash[s[i]];
        }
    }   
    return result;
};

console.log(romanToInt("MCMLXXXIX"));

/* 
    result += M(1000) = 1000; (i = 0)
    result += CM(900) = 1900; (i = 3);
    result += L(50) = 1950; (i = 4);
    result += X(10) = 1960; (i = 5);
    result += X(10) = 1970; (i = 6);
    result += X(10) = 1980; (i = 7);
    result += IX(9) = 1989; (I = 9);
    9 !< 9 => break with result = 1989;
*/