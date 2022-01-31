function longest_word_in(sentence) {
    return sentence.split(" ")
    .reduce((prev, current) => prev.length > current.length ? prev : current);
}

// Testing Ouputs:
console.log(
    longest_word_in("In Programming We Love Elzero Academy Tooooooooooo Much")
);
// Tooooooooooo;