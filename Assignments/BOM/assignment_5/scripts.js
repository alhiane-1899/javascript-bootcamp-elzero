// dom elements:
const counterEl = document.querySelector('.counter');

// countDown:
const counter = window.setInterval(_ => {
    counterEl.innerHTML -= 1;
    if (counterEl.innerHTML === "5") {
        window.open("https://elzero.org/", "_blank", "width=400,height=400");
    }
    if (counterEl.innerHTML === "0") {
        window.clearInterval(counter);
    }
}, 500);