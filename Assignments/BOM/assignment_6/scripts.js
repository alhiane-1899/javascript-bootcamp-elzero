// dom elements:
const bodyEl = document.body;
const selectBoxes = document.querySelectorAll('select');

// set local storage props to body:
const lsFont = localStorage['fonts'];
const lsSize = localStorage['sizes'];
const lsColor = localStorage['colors'];
if (lsFont !== "") {
    bodyEl.style.fontFamily = `${lsFont}, sans-serif`;
    document.getElementById("fonts").value = lsFont;
}
if (lsSize !== "") {
    bodyEl.style.fontSize = `${lsSize}px`;
    document.getElementById("sizes").value = lsSize;
}
if (lsColor !== "") {
    bodyEl.style.color = lsColor;
    document.getElementById("colors").value = lsColor;
}

// target poprs from select boxes:
selectBoxes.forEach(select => {
    select.addEventListener('change', event => {
        const target = event.currentTarget;
        if (target.id === "fonts") {
            bodyEl.style.fontFamily = `${target.value}, sans-serif`;
            localStorage.fonts = target.value;
        }
        if (target.id === "sizes") {
            bodyEl.style.fontSize = `${target.value}px`;
            localStorage.sizes = target.value;
        }
        if (target.id === "colors") {
            bodyEl.style.color = `${target.value}`;
            localStorage.colors = target.value;
        }
    });
});