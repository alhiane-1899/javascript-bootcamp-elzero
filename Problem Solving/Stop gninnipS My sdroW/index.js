// solution number1:
// function spinWords(string){
//     let result = "";
//     let parentArr = string.split(" ");
//     for (let i = 0; i < parentArr.length; i++) {
//         if (parentArr[i].length <= 4) {
//             result += `${parentArr[i]} `;
//         } else {
//             result += `${parentArr[i].split("").reverse().join("")} `;
//         }
//     }
//     return result.trim();
// }
// console.log(spinWords("Hey fellow warriors")); // Hey wollef sroirraw;
/*
    * parentArr = ["Hey", "fellow", "warriors"];
    * i = 0:
        - parentArr[i] => Hey.length <= 4 ? true => result += Hey ;
    * i = 1:
        - parentArr[i] => fellow.length <= 4 ? false:
            - result += wollef;
    * i = 2:
        - parentArr[i] => warriors.fellow <= 4 ? false:
            - result += sroirraw;
    => result = Hey wollef sroirraw;
*/

// solution number 2:
function spinWords(string) {
    return string.split(' ').map(word => {
        return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
}
console.log(spinWords("hello world"));
/*
    - first map => word = "hello":
        - hello.length > 4 ? true:
            - "hello" => ["h", "e", "l", "l", "o"]:
                - ["o", "l", "l", "e", "h"] => "olleh";
    - second map => word = "world":
        - world.length > 4 ? true:
            - "world" => ["w", "o", "r", "l", "d"]:
                - ["d", "l", "r", "o", "w"] => "dlrow";
    -map() will return array => ["olleh", "dlrow"] => "olleh dlrow";
*/