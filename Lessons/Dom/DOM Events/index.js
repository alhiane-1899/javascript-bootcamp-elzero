/*
    - DOM [Events]:
        - Use Events On HTML
        - Use Events On JS
        --- onclick
        --- oncontextmenu => change context menu (menu of right click);
        --- onmouseenter
        --- onmouseleave

        --- onload
        --- onscroll
        --- onresize

        --- onfocus
        --- onblur
        --- onsubmit
*/

let myBtn = document.getElementById("btn");

myBtn.onclick = _ => console.log("clicked");

window.oncontextmenu = event => {
    event.preventDefault();
    console.log("change context menu");
}

myBtn.onmouseenter = _ => console.log("move on button");

myBtn.onmouseleave = _ => console.log("leave button");

window.onload = _ => console.log("window loaded");

window.onscroll = _ => console.log("window scrolled");

window.onresize = _ => console.log("window resized");

let form = document.querySelector("form");

form.name.onfocus = _ => console.log("focus on name input");

form.name.onblur = _ => console.log("blur from name input");

form.onsubmit = _ => console.log("form submited");