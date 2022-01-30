// dom elements:
const addItemsForm = document.getElementById("addItemsForm");
const addItemsInput = addItemsForm.addItemsInput;
const itemsContainer = document.querySelector(".items-container");

// input => empty - focus:
function emptyFocusOnInput() {
    addItemsInput.value = "";
    addItemsInput.focus();
}

// padding for itemsContainer:
function pdForItemsContainer() {
    const items = getItemsFromLs();
    if (items.length > 0) {
        itemsContainer.classList.add("pd");
    } else {
        itemsContainer.classList.remove("pd");
    }
}

// show items function:
function showItems() {
    // clear container:
    itemsContainer.innerHTML = "";

    const items = getItemsFromLs();
    items.forEach(item => createItem(item));
}

// show items when window loaded:
showItems();

// create item function:
function createItem(itemName) {    
    const itemEl = document.createElement("div");
    itemEl.className = "item";

    const itemNameEl = document.createElement('h4');
    itemNameEl.className = "item-name";

    const itemNameText = document.createTextNode(itemName);
    itemNameEl.appendChild(itemNameText);

    itemEl.appendChild(itemNameEl);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener('click', _ => {
        deleteItemsFromLs(itemName);
        showItems();
        pdForItemsContainer();
    });
    
    const btnText = document.createTextNode("Delete");
    deleteBtn.appendChild(btnText);

    itemEl.appendChild(deleteBtn);

    itemsContainer.appendChild(itemEl);
}

// submit form:
addItemsForm.addEventListener('submit', event => {
    event.preventDefault();
    const inputValue = addItemsInput.value;
    if (inputValue) {
        addItemsToLs(inputValue);
        showItems();
        emptyFocusOnInput();
        pdForItemsContainer();
    } else {
        alert("Empty Input!");
    }
});

// Add Items To Local Storage:
function addItemsToLs(newItem) {
    const items = getItemsFromLs();
    localStorage.setItem("item", JSON.stringify([...items, newItem]));
}

// Delete Items From Local Storage:
function deleteItemsFromLs(item) {
    const items = getItemsFromLs();
    localStorage.setItem("item", JSON.stringify(
        items.filter(el => el !== item)
    ));
}

// Get Items From Local Storage:
function getItemsFromLs() {
    const items = JSON.parse(localStorage.getItem("item"));
    return localStorage.getItem("item") ? items : [];
}