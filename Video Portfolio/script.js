window.addEventListener("scroll", function() {
    let header = document.querySelector(".header");
    let bannerHeight = document.querySelector(".welcome-banner").offsetHeight;

    if (window.scrollY > bannerHeight) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
