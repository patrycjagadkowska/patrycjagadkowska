"use strict";
const sections = document.querySelectorAll(".fade-in-section");
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
};
const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        }
        else {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);
sections.forEach((section) => {
    appearOnScroll.observe(section);
});
