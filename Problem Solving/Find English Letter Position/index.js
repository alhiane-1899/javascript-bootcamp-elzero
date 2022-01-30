function find_position_for(letter) {
    let allLetters = "abcdefghijklmnopqrstuvwxyz".split("");
    return allLetters.indexOf(letter.toLowerCase()) + 1;
}

// Testing Ouputs:
console.log(find_position_for("C")) // 3;
console.log(find_position_for("P")) // 16;