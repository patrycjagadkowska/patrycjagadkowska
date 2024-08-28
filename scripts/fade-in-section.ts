const sections: NodeListOf<Element> = document.querySelectorAll(".fade-in-section");

const appearOptions: IntersectionObserverInit = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll: IntersectionObserver = new IntersectionObserver(
    function(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
    entries.forEach((entry: IntersectionObserverEntry) => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        }
    })
}, appearOptions);

sections.forEach((section: Element) => {
    appearOnScroll.observe(section);
});