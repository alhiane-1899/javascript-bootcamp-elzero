function solution(str) {
    // const splitStr = str.split("");
    // let tmp = "";
    // let list = [];
    // for (let i = 0; i < splitStr.length; i++) {
    //     if (i % 2 !== 0) {
    //         tmp = splitStr[i - 1] + splitStr[i];
    //         list.push(tmp);
    //         tmp = "";
    //     }
    //     if (splitStr.length % 2 !== 0) {
    //         if (i === splitStr.length - 1) {
    //             tmp = splitStr[i] + "_";
    //             list.push(tmp);
    //         }
    //     }
    // }
    return (str + "_").match(/.{2}/g);
}

console.log(solution('abc')); // should return ['ab', 'c_'];
console.log(solution('abcdef')); // should return ['ab', 'cd', 'ef'];
console.log(solution("abcdef")); // ["ab", "cd", "ef"]);
console.log(solution("abcdefg")); // ["ab", "cd", "ef", "g_"]);