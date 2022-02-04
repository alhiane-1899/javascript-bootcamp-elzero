function remove_char_from(word, c) {
    return word.split("")
    .reduce((prev, current) => {
        return current === c || 
        current === c.toLowerCase() ||
        current === c.toUpperCase() ?
        prev : prev + current;
    });
}

// Testing Ouputs:

console.log(remove_char_from("ElddzeroD WebDD ddSchool", "d"));
// Elzero Web School;

console.log(remove_char_from("ElxzeroX Web Sxchool", "x"));
// Elzero Web School;

console.log(remove_char_from("Elzero@ Web@@ @@School", "@"));
// Elzero Web School;