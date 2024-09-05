"use strict";
const hoveredElements = document.querySelectorAll(".slider");
function toggleSlide(isEntering) {
    const actions = [
        { selector: ".sliding-el", enter: "slide-out", exit: "slide-in" },
        { selector: ".sliding-el-reverse", enter: "slide-in", exit: "slide-out" }
    ];
    actions.forEach(({ selector, enter, exit }) => {
        const elements = this.querySelectorAll(selector);
        elements.forEach((el) => {
            el.classList.add(isEntering ? enter : exit);
            el.classList.remove(isEntering ? exit : enter);
        });
    });
}
hoveredElements.forEach((el) => {
    el.addEventListener("mouseenter", function () { toggleSlide.call(this, true); });
    el.addEventListener("mouseleave", function () { toggleSlide.call(this, false); });
});
