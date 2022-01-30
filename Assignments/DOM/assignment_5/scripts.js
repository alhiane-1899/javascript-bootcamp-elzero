let images = document.images;

[...images].forEach(img => {
    if (img.hasAttribute('alt')) {
        img.alt = "Old";
    } else {
        img.setAttribute("alt", "Elzero New");
    }
});