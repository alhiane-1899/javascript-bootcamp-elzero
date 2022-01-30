/*
    * Loop Control:
        - Break
        - Continue
        - Label
*/

let products = ["Keyboard", 1, "Mouse", 100, "Pen", 200, "Pad", 2, "Monitor"];

let colors = ["Red", "Green", "Black"];

mainLoop: for (let i = 0; i < products.length; i++) {
    if (typeof products[i] === 'number') continue;
    console.log(products[i]);
    nestedLoop: for (let j = 0; j < colors.length; j++) {
        console.log(`- ${colors[j]}`);
        if (colors[j] === "Green") {
            break nestedLoop;
            // break mainLoop;
        }
    }
}

/*
Keyboard
- Red
- Green
Mouse
- Red
- Green
Pen
- Red
- Green
Pad
- Red
- Green
Monitor
- Red
- Green
*/