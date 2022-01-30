/*
    - Object:
        --- Nested Object And Trainings.
*/

let available = true;

let user = {
    name: "Osama",
    age: 38,
    skills: ["HTML", "CSS", "JS"],
    available: false,
    addresses: {
        ksa: "Riyadh",
        egypt: {
            one: "Cairo",
            two: "Giza",
        },
    },
    checkAv: function () {
        if (user.available === true) {
            return `Free For Work`;
        } else {
            return `Not Free`;
        }
    },
};

console.log(user.name); // Osama;
console.log(user.age); // 38;
console.log(user.skills); // ["HTML", "CSS", "JS"];
console.log(user.skills.join(" | ")); // Html | Css | Js;
console.log(user.skills[2]); // Js;
console.log(user.addresses.ksa); // Riyadh
console.log(user.addresses.egypt.one); // Cairo;
console.log(user["addresses"].egypt.one); // Cairo;
console.log(user["addresses"]["egypt"]); // {one: "Cairo", two: "Giza"},
console.log(user["addresses"]["egypt"]["two"]); // Giza;
console.log(user.checkAv()); // Not Free;