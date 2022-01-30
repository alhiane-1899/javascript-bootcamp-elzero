// dom elements:
let one = document.querySelector('.one');
let two = document.querySelector('.two');

let titleOne = one.getAttribute('title');
let titleTwo = two.getAttribute('title');

one.setAttribute('title', titleTwo);
two.setAttribute('title', titleOne);

let innerOne = one.innerHTML;
let innerTwo = two.innerHTML;

one.innerHTML = innerTwo;
two.innerHTML = `${innerOne} ${one.attributes.length}`;