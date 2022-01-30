// body children:
let bodyChilds = document.body.children;

// capitalize function:
function capitalize(string) {
    return string.substr(0, 1).toUpperCase() +
    string.substr(1).toLowerCase();
} 

// target tag name:
[...bodyChilds].forEach(child => {
    child.addEventListener('click', event => {
        console.log(`This Is ${capitalize(event.target.tagName)}`);
    });
});