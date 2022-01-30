// dom elements:
const counterEl = document.querySelector('.counter');

// countDown:
const counter = window.setInterval(_ => {
    counterEl.innerHTML -= 1;
    if (counterEl.innerHTML === "0") {
        window.clearInterval(counter);
    }
}, 500);