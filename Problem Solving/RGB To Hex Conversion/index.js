function rgb(r, g, b){
    return [r, g, b].map(num => {
        return num = num <= 0 ? '00' :
        num > 255 ? "FF" :
        num.toString(16).length === 1 ? `0${num.toString(16)}`:
        num.toString(16);
    }).join("").toUpperCase();
}

console.log(rgb(255, 255, 138)); // FFFF8A;
console.log(rgb(218, 15, 16)); // DA0F10;
console.log(rgb(0, 0, 0)); // 000000;
console.log(rgb(0, 0, -20)); // 000000;
console.log(rgb(300, 255, 255)); // FFFFFF;
console.log(rgb(173, 255, 47)); // ADFF2F;
console.log(rgb(64, 277, 24)); // 40FF18;
console.log(rgb(130, 26, 13)); // 821A0D;
console.log(rgb(20, 258, 103)) // 14FF67;
console.log(rgb(19,106,292)); // 136AFF;
console.log(rgb(116, 16, 278)); // 7410FF;