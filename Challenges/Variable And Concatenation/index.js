let title = "Elzero",
    desc = "Elzero Web School",
    date = "25/10";
let card = `
    <div class="card">
        <h3>Hello ${title}</h3>
        <p>${desc}</p>
        <span>${date}</span>
    </div>
`;
document.write(card.repeat(4));