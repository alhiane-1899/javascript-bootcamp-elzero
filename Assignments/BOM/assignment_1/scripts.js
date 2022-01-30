// get range of numbers from user;
const range = prompt("Print Number From – To", "Example: 5-20");

// get only numbers from-to:
const startEnd = range.split("-");

// get start - end number:
const start = +startEnd[0] < +startEnd[1] ? +startEnd[0] : +startEnd[1];
const end = +startEnd[0] > +startEnd[1] ? +startEnd[0] : +startEnd[1];

// print all target numbers on page:
for (let i = start; i <= end; i++) document.write(`${i}<br/>`);

// test outputs:

/* 
    * 10-15:
        10
        11
        12
        13
        14
        15
*/

/*
    * 20-10:
        10
        11
        12
        13
        14
        15
        16
        17
        18
        19
        20
*/
