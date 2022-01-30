// function remove_duplicate_words_from(sentence) {
//     return sentence.split(" ")
//     .reduce((prev, current) => {
//         return prev.indexOf(current) > -1 ?
//         prev : prev + " " + current;
//     });
// }

function remove_duplicate_words_from(sentence) {
    return Array.from(new Set(sentence.split(" "))).join(" ");
}

// Testing Ouput:
console.log(remove_duplicate_words_from("Hello Elzero Web Web Hello School"))
// Hello Elzero Web School;