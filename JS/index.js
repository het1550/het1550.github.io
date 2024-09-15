let index = 0;
const slides = document.querySelectorAll('.slide');
setInterval(() => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}, 3000);


    window.addEventListener('scroll', function() {
        var navbar = document.querySelector('.glassy-navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });