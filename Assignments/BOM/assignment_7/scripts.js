// dom elements:
const sessionInputEl = document.querySelectorAll('[name="sessionInput"]');

// set data to target input:
const inputOne = sessionStorage.getItem("inputOne");
const inputTwo = sessionStorage.getItem("inputTwo");
const inputThree = sessionStorage.getItem("inputThree");
const select = sessionStorage.getItem("select");
if (inputOne !== "") {
    document.getElementById("inputOne").value = inputOne;
}
if (inputTwo !== "") {
    document.getElementById("inputTwo").value = inputTwo;
}
if (inputThree !== "") {
    document.getElementById("inputThree").value = inputThree;
}
if (select !== "") {
    document.getElementById("select").value = select;
}

// add data to sessionStorage:
sessionInputEl.forEach(input => {
    input.addEventListener('change', event => {
        const el = event.currentTarget;
        sessionStorage.setItem(el.id, el.value);
    });
});