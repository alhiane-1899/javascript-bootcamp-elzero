function reverse(sentence) {
    return sentence.split(" ").reverse().join(" ");
}

// function reverse(sentence) {
//     return sentence.split(" ").reverse()
//     .reduce((prev, current) => prev + " " + current);
// }

// Testing Ouput:
console.log(reverse("Elzero Web School")); // "School Web Elzero";