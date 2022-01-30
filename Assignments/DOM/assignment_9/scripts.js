// remove p:
document.querySelector('p').remove();

const ourElement = document.querySelector('.our-element');

// add .start before .our-element:
const startEl = document.createElement('div');
startEl.className = "start";
startEl.title = "Start Element";
startEl.setAttribute("data-value", "Start");
startEl.innerHTML = "Start";
ourElement.before(startEl);

// add .end after .our-element:
const endEl = document.createElement('div');
endEl.className = "end";
endEl.title = "end Element";
endEl.setAttribute("data-value", "End");
endEl.innerHTML = "End";
ourElement.after(endEl);