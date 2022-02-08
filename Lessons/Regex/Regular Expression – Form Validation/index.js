/*
    - Regular Expression:
        --- Input Form Validation Practice.
*/

const registerEl =  document.getElementById("register")

registerEl.addEventListener("submit", event => {
    event.preventDefault();
    let phoneInput = document.getElementById("phone").value;
    let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 567-8910;
    let validationResult = phoneRe.test(phoneInput);
    if (validationResult === false) return false; // don't send data to server;
    return true; // send data to server;
});