/*
    Loop Challenge:
*/

let myAdmins = ["Ahmed", "Osama", "Lahcen", "Sayed", "Stop", "Samera"];

let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar", "Latifa"];

let adminsShowed = myAdmins.slice(0, myAdmins.indexOf("Stop"));

let count = 1;

document.write(`<div>We Have ${adminsShowed.length} Admins</div>`);

for (let i = 0; i < myAdmins.length; i++) {

    if (myAdmins[i] === "Stop") break;

    document.write(`<p>The Admin For Team ${i + 1} Is ${myAdmins[i]}</p>`);

    document.write(`<h3>Them Members:</h3>`);

    for (let j = 0; j < myEmployees.length; j++) {

        if (myAdmins[i][0] === myEmployees[j][0]) {

            document.write(`<p>- ${count} ${myEmployees[j]}</p>`);

            count++;

        }

    }

    count = 1;

    myAdmins[i + 1] !== "Stop" ? document.write(`<hr/>`) : null;

}