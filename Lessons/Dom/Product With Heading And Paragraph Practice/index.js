/*
  * DOM [Create Elements]L
    - Practice Product With Heading And Paragraph:
*/

for (let i = 0; i < 100; i++) {
    // create product element:
    let product = document.createElement('div');

    // set class name to product element:
    product.className = "product";

    // create productTitle element:
    let productTitle = document.createElement('h3');

    // set class name to productTitle element:
    productTitle.className = "product-title";

    // create productTitle text:
    let title = document.createTextNode("Product Title");

    // append productTitle text to productTitle element:
    productTitle.appendChild(title);

    // create productDesc element:
    let productDesc = document.createElement('p');

    // set class name to productDesc element:
    productDesc.className = "product-desc";

    // create productDesc text:
    let desc = document.createTextNode('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima necessitatibus nesciunt, numquam eligendi adipisci in animi quia reprehenderit beatae, optio blanditiis nam fuga aliquam asperiores molestiae ducimus. Voluptas, deleniti praesentium?');

    // append productDesc text to productDesc element:
    productDesc.appendChild(desc);

    // append productTitle element to parent product element:
    product.appendChild(productTitle);
    
    // append productDesc element to parent product element:
    product.appendChild(productDesc);

    // append product parent element to body:
    document.body.appendChild(product);

    // create seperator (hr):
    let hr = i < 99 ? document.createElement('hr') : "";
    document.body.appendChild(hr);
}