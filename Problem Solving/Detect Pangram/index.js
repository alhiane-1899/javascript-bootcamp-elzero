function isPangram(string){
    // const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    // let isFound = true;
    // for (let i = 0; i < alphabet.length; i++) {
    //     if(!string.includes(alphabet[i]) &&
    //     !string.includes(alphabet[i].toUpperCase())) {
    //         isFound = false;
    //         break;
    //     }
    // }
    // return isFound;

    return "abcdefghijklmnopqrstuvwxyz".split("").every(l => string.includes(l));
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("This is not a pangram."));