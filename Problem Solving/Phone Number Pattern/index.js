function generate_phone_number(nums) {
    return nums.length === 10 ? nums.map((num, index) => {
        return index === 0 ? "(" + num : index === 2 ? num + ") " :
        index === 6 ? "-" + num : num;
    }).join("") : "Invalid Phone Number!";
}

// outputs:
console.log(generate_phone_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// (123) 456-7890;
console.log(generate_phone_number([6, 2, 4, 7, 2, 1, 0, 2, 1, 1]));
// (624) 721-0211;
console.log(generate_phone_number([1, 5, 5, 4, 9, 8, 6, 7, 1, 2, 1]));
// Invalid Phone Number!