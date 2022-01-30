// function DNAStrand(dna){
//     return dna.split("").map(letter => {
//         return letter === "A" ? "T":
//         letter === "T" ? "A":
//         letter === "C" ? "G":
//         "C"
//     }).join("");
// }

function DNAStrand(dna){
    let dnaObj = {'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C'}
    return dna.split("").map(letter => dnaObj[letter]).join("");
}

console.log(DNAStrand("AAAA")); // TTTT;
console.log(DNAStrand("ATTGC")); // TAACG;
console.log(DNAStrand("GTAT")); // CATA;