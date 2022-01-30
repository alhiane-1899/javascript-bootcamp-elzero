/*
    * DOM [Events Simulation]:
        - onclick => click();
        - onfocus => focus();
        - onblur => blur();
*/

let inputs = document.querySelectorAll('input');

inputs.forEach((input, index) => {
    input.oninput = _ => {
        if (input.value.length === 1 && index !== 4) {
            input.blur();
            document.querySelector(`.char-${index + 1}`).focus();
        }
    }
}); 