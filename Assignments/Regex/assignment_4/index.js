let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/ig;

/*
    - https? => 's' exist or not;
    - :\/\/ => ://;
    - (?:[-\w]+\.)? => (?:-wc(one or more -word_char)) exist or not;
    - ([-\w]+) => -word_char(one or more);
    - \. => .;
*/

console.log("https://-q-1-s.alhiane.com/php".match(re));