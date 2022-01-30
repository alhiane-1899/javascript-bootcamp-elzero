// dorm elements:
const classesToAddInput = document.querySelector('.classes-to-add');
const classesToRemoveInput = document.querySelector('.classes-to-remove');
const currentEl = document.getElementsByClassName('current')[0];
const classesListEl = document.querySelector('.classes-list > div');

// show currentEl class list:
function showClassList() {
    // clear container:
    classesListEl.innerHTML = '';
    // get currentEl class list:
    const classesList = currentEl.classList;
    // show class as span:
    if (classesList.length !== 0) {
        [...classesList].forEach(cls => {
            // span that show class name:
            let span = document.createElement('span');
            // add class name to span:
            span.innerHTML = `${cls}`;
            // append span to classesListEl;
            classesListEl.appendChild(span);
        });
    } else {
        // errorMsg:
        let errorMsgEl = document.createElement('h3');
        // add error msg to errorMsgEl:
        errorMsgEl.innerHTML = "No Items To Show!";
        // append errorMsgEl to classesListEl;
        classesListEl.appendChild(errorMsgEl);
    }
}

// show currentEl class list:
showClassList();

// add - remove classes Function:
function addRemoveClasses(input) {
    // if input is not empty:
    if (input.value !== "") {
        if (input.classList.contains("classes-to-add")) {
            // addd classes
            currentEl.classList.add(...input.value.split(" "));
            // show class list:
            showClassList();
        } else if (input.classList.contains("classes-to-remove")) {
            // remove classes:
            currentEl.classList.remove(...input.value.split(" "));
            // show class list:
            showClassList();
        }
    }
}

// blur from classesToAdd input:
classesToAddInput.addEventListener('blur', _ => {
    addRemoveClasses(classesToAddInput);
});

// blur from classesToRemove input:
classesToRemoveInput.addEventListener('blur', _ => {
    addRemoveClasses(classesToRemoveInput);
});


