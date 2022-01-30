/*
    * DOM [Deal With Elements]:
        - before [Element || String]
        - after [Element || String]
        - append [Element || String]
        - prepend [Element || String]
        - remove
*/

let element = document.getElementById("my-div");
let createdP = document.createElement("p");

// before [Element || String]:
element.before("Before My Div");
// element.before(createdP);

// after [Element || String]:
element.after("After My Div");
// element.after(createdP);

// append [Element || String]:
element.append("Added ends Of My Div");
// element.append(createdP);

// prepend [Element || String]:
// element.prepend("Added Starts Of My Div");
element.prepend(createdP);

// element.remove();