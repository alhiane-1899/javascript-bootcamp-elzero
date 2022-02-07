function swaping(word) {
    return word.split("")
    .map(char => {
        if (!isNaN(char)) return ""
        else if (char.toUpperCase() === char) return char.toLowerCase()
        else return char.toUpperCase();
    }).join("");
}

// Testing Ouputs:
console.log(swaping("HellO")) // hELLo;
console.log(swaping("WOrld")) // woRLD;
console.log(swaping("12ProGRAM12")) // pROgram;