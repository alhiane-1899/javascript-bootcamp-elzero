/*
    * BOM [Browser Object Model] => Session Storage:
        - setItem
        - getItem
        - removeItem
        - clear
        - key

    * Info
        - New Tab = New Session
        - Duplicate Tab = Copy Session
        - New Tab With Same Url = New Session
*/

// window.localStorage.setItem("color", "red");
// window.sessionStorage.setItem("color", "blue");

const inputName = document.querySelector(".name");

if (sessionStorage["input-name"]) {
    inputName.value = sessionStorage["input-name"];
}

inputName.onblur = function () {
    // console.log(this.value);
    window.sessionStorage.setItem("input-name", this.value);
};