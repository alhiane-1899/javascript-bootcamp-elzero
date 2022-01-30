/*
    - BOM [Browser Object Model]:
        --- Local Storage Practice
*/

const lis = document.querySelectorAll("ul li");
const exp = document.querySelector(".experiment");
const lsColor = window.localStorage.getItem("color");

// If There Is Color In Local Storage:
if (lsColor) {
    // [1] Add Color To Div:
    exp.style.backgroundColor = lsColor;

    // [2] Remove Active Class From All Lis:
    lis.forEach(li => li.classList.remove("active"));

    // [3] Add Active Class To Current Color:
    const dataColorEl = document.querySelector(`[data-color="${lsColor}"]`);
    dataColorEl.classList.add("active");
}

lis.forEach((li) => {
    li.addEventListener("click", (e) => {
        // console.log(e.currentTarget.dataset.color); // data-color = ?;

        // Remove Active Class From all Items:
        lis.forEach(li => li.classList.remove("active"));

        // Add Active Class To Current Element:
        e.currentTarget.classList.add("active");

        // Add Current Color To Local Storage:
        window.localStorage.setItem("color", e.currentTarget.dataset.color);

        // Change Div Background Color:
        exp.style.backgroundColor = e.currentTarget.dataset.color;
    });
});