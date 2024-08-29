const mobileNavBtn: Element = document.getElementById("mobile-nav-btn")!;
const mobileNav: Element = document.getElementById("mobile-nav")!;

function toggleNav() {
    const isOpen: boolean = mobileNav.classList.contains("is-open");

    if (isOpen) {
        mobileNav.classList.remove("is-open");
        mobileNavBtn.classList.remove("is-open");
    } else {
        mobileNav.classList.add("is-open");
        mobileNavBtn.classList.add("is-open");
    }
}

mobileNavBtn.addEventListener("click", toggleNav);