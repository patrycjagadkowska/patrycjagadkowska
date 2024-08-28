"use strict";
const hoverElements = document.querySelectorAll(".hover-letters");
hoverElements.forEach((el) => {
    const textContent = el.textContent;
    el.removeChild(el.firstChild);
    if (textContent) {
        for (let i = 0; i < textContent.length; i++) {
            const newSpan = document.createElement("span");
            newSpan.textContent = textContent[i];
            newSpan.classList.add("hover-el");
            newSpan.setAttribute("style", `animation-delay: ${i / 10}s;`);
            el.appendChild(newSpan);
        }
    }
});
