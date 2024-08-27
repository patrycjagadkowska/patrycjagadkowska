var hoverElements = document.querySelectorAll(".hover-letters");
hoverElements.forEach(function (el) {
    var textContent = el.textContent;
    el.removeChild(el.firstChild);
    if (textContent) {
        for (var i = 0; i < textContent.length; i++) {
            var newSpan = document.createElement("span");
            newSpan.textContent = textContent[i];
            newSpan.classList.add("hover-el");
            newSpan.setAttribute("style", "animation-delay: ".concat(i / 10, "s;"));
            el.appendChild(newSpan);
        }
    }
});
