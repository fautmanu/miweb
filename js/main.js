function scrollValue() {
    var navbar = document.querySelector('.navbar');
    var scroll = window.scrollY;
    navbar.classList.toggle('navbar-scrolled',scroll > 60);
}

window.addEventListener('scroll', scrollValue);