const hoveredElements: NodeListOf<Element> = document.querySelectorAll(".slider");

function toggleSlide(this: Element, isEntering: boolean) {
    const actions = [
        { selector: ".sliding-el", enter: "slide-out", exit: "slide-in" },
        { selector: ".sliding-el-reverse", enter: "slide-in", exit: "slide-out" }
    ];

    actions.forEach(({ selector, enter, exit }) => {
        const elements: NodeListOf<Element> = this.querySelectorAll(selector);
        elements.forEach((el: Element) => {
            el.classList.add(isEntering ? enter : exit);
            el.classList.remove(isEntering ? exit : enter);
        });
    });
}

hoveredElements.forEach((el: Element) => {
    el.addEventListener("mouseenter", function(this: Element) { toggleSlide.call(this, true); });
    el.addEventListener("mouseleave", function(this: Element) { toggleSlide.call(this, false); });
});