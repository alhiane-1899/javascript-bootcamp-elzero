// document.querySelector('h1').style.color = "#f00";

// output to screen:
window.alert("Hello From Js File!");
document.write("Hello From Js File!");
console.log("Hello From Js File!");

console.log('-'.repeat(50));

// console => from web api:
console.log("Log");
console.error("Error!");
console.table(["Ahemd", "Lahcen", "Alhiane"]);
// console styles => %c directive;
console.log(
    "%cHello From %cJs File!",
    "color: red; font-size: 20px",
    "color: blue; font-size: 30px"
);
// Hello From => by red and 20px of font;
// Js File! => by blue and 30px of font;

console.log('-'.repeat(50));

// Es5 => Ecmascript5:
var my_name = "Alhiane";
console.log("Hello " + my_name);

console.log('-'.repeat(50));

// Es6 => Ecmascript6:
let his_name = "Alhiane";
console.log(`Hello ${his_name}`);