// My Script
// hamburger menu
const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.nav-container');
const header = document.querySelector('.myNav');
const nav_menu_items = document.querySelectorAll('.nav-links li a');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});
// Nav menu close on mobile view
nav_menu_items.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});
// header background change
document.addEventListener('scroll', () => {
    let scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = "black"
    } else {
        header.style.backgroundColor = "transparent"
    }
});
// Owl carousel customize
$(document).ready(function() {
    $('.main-slider .my-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 12000,
        smartSpeed: 1200,
        animateIn: 'animate__jackInTheBox'
    });

});