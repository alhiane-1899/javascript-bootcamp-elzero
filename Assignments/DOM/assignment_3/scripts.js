// dom elements:
let dollarInput = document.forms[0].dollar;
let resultEl = document.querySelector(".result");

// dollar = 15.6 eg pound:

dollarInput.addEventListener('input', _ => {
    let inputValue = dollarInput.value;
    if (inputValue === '') {
        resultEl.innerHTML = `{0} USD Dollar = {0} Egyptian Pound`;
    } else {
        let dlrToEgP = (inputValue * 15.6).toFixed(2);
        resultEl.innerHTML = `{${inputValue}} USD Dollar = {${dlrToEgP}} Egyptian Pound`;
    }
});