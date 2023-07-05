const menuButton = document.querySelector('.hamburger');
const menuMobile = document.querySelector('.nav-links');

menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('is-active');
    menuMobile.classList.toggle('active');
});