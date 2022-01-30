// body element:
let bodyEl = document.body;

// body style:
bodyEl.style.cssText = `
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 400;
`;

// header element
let headerEl = document.createElement("header");

// header class name:
headerEl.className = "website-head";

// header style:
headerEl.style.cssText = `
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

// logo element:
let logoEl = document.createElement("a");

// logo class name:
logoEl.className = "logo";

// logo style:
logoEl.style.cssText = `
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 2px;
    color: #2BA96D;
`;

// brand text:
let brand = document.createTextNode("Elzero");

// append brand text to logo element:
logoEl.appendChild(brand);

// append logo to header:
headerEl.appendChild(logoEl);

// create nav links element:
let navLinksEl = document.createElement("ul");

// nav links class name:
navLinksEl.className = "nav-links";

// nav links style:
navLinksEl.style.cssText = `
    display: flex;
    list-style-type: none;
`;

// nav links list:
let navLinksList = ["Home", "About", "Services", "Contact"];

// create 4 list items:
for (let i = 0; i < navLinksList.length; i++) {
    // create list item:
    let listItem = document.createElement("li");

    // create link element:
    let linkEl = document.createElement('a');

    // link style:
    linkEl.style.cssText = `
        padding: 0 1rem;
        text-decoration: none;
        color: #444;
        transition: color .2s linear;
    `;

    // link on hover:
    linkEl.addEventListener('mouseenter', _ => linkEl.style.color = '#2BA96D');

    // link on mouse leave:
    linkEl.addEventListener('mouseleave', _ => linkEl.style.color = '#444444');

    // href attr for link:
    linkEl.setAttribute("href", "#");

    // link text:
    let linkText = document.createTextNode(`${navLinksList[i]}`);
    
    // append link text to target link:
    linkEl.appendChild(linkText);

    // append link to list item:
    listItem.appendChild(linkEl);

    // append list item to nav links:
    navLinksEl.appendChild(listItem);
}

// append nav links to header:
headerEl.appendChild(navLinksEl);

// append header to body:
bodyEl.appendChild(headerEl);

// main content:
let mainContentEl = document.createElement("main");

// mainContentEl class name:
mainContentEl.className = "content";

// mainContentEl style:
mainContentEl.style.cssText = `
    padding: 1rem;
    background-color: #eee;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 1rem;
`;

for (let i = 0; i < 15; i++) {
    // product element:
    let productEl = document.createElement("div");

    // productEl class name:
    productEl.className = "product";

    // productEl style:
    productEl.style.cssText = `
        padding: 1.5rem;
        text-align: center;
        background-color: #fff;
    `;

    // product title:
    let productTitleEl = document.createElement("h3");

    // productTitleEl class name:
    productTitleEl.className = "product-title";

    // productTitleEl style:
    productTitleEl.style.cssText = `
        font-size: 1.5rem;
        font-weight: 600;
        letter-spacing: 2px;
        color: #444;
        margin-bottom: .25rem;
    `;

    // productTitleEl text:
    let productTitleText = document.createTextNode(`${i + 1}`);

    // append productTitleText to productTitleEl:
    productTitleEl.appendChild(productTitleText);

    // append productTitleEl to productEl:
    productEl.appendChild(productTitleEl);

    // product desc:
    let productDescEl = document.createElement("p");

    // productDescEl class name:
    productDescEl.className = "product-desc";

    // productDescEl style:
    productDescEl.style.cssText = `
        letter-spacing: 1px;
        color: #777;
    `;

    // productDescEl text:
    let productDescText = document.createTextNode("Product");

    // append productDescText to productDescEl:
    productDescEl.appendChild(productDescText);

    // append productDescEl to productEl:
    productEl.appendChild(productDescEl);

    // append productEl to mainContentEl:
    mainContentEl.appendChild(productEl);
}

// append mainContentEl to bodyEl:
bodyEl.appendChild(mainContentEl);

// footer:
let footerEl = document.createElement("footer");

// footer class name:
footerEl.className = "footer";

// footer style:
footerEl.style.cssText = `
    padding: 1rem;
    background-color: #2BA96D;
    text-align: center;
    letter-spacing: 1px;
    color: #fff;
`;

// credit text:
let creditText = document.createTextNode("Copyright 2021");

// append creditText to footer:
footerEl.appendChild(creditText);

// append footer to bodyEl:
bodyEl.appendChild(footerEl);