function createPopup() {
    // popup element:
    const popupEl = document.createElement("div");
    popupEl.className = "popup";

    // close popup btn:
    const closeBtn = document.createElement("button");
    closeBtn.className = "close-btn";
    closeBtn.innerHTML = "X";

    // close popup when btn clicked:
    closeBtn.addEventListener("click", _ => popupEl.remove());

    // popup title element:
    const popupTitleEl = document.createElement("h3");
    popupTitleEl.className = "popup-title";
    popupTitleEl.innerHTML = "Welcome";

    // popup desc element:
    const popupDescEl = document.createElement("p");
    popupDescEl.className = "popup-desc";
    popupDescEl.innerHTML = "Welcome To Elzero Web School";

    // append btn - title - desc to popupEl:
    popupEl.appendChild(closeBtn);
    popupEl.appendChild(popupTitleEl);
    popupEl.appendChild(popupDescEl);

    // append popupEl to body:
    document.body.appendChild(popupEl);
}

// run createPopup function after 5s:
window.setTimeout(createPopup, 5000);