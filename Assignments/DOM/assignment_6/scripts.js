// dom elements:
const formEl = document.forms[0];
const numOfElInput = formEl.elements;
const textsInput = formEl.texts;
const typeSelect = formEl.type;
const resultsEl = document.querySelector('.results');

// form submited:
formEl.addEventListener('submit', e => {
    e.preventDefault();
    // clear container:
    resultsEl.innerHTML = '';
    // data:
    let numOfEl = numOfElInput.value;
    let text = textsInput.value;
    let type = typeSelect.value;
    if (numOfEl !== "" && text !== "" && type !== "") {
        for (let i = 0; i < +numOfEl; i++) {
            // creaye test element:
            let testEl = document.createElement(type);
            // testEl class name:
            testEl.className = "box";
            // testEl class name:
            testEl.title = "element";
            // testEl id name:
            testEl.id = `id-${i + 1}`;
            // testEl content:
            testEl.textContent = text;
            // append testEl to resultsEl:
            resultsEl.appendChild(testEl);
        }
    } else {
        alert('Empty Input!');
    }
});