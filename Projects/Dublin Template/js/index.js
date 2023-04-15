//Navbar Hamburger

window.onload = function () {
    const menuButton = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-nav-container');

    menuButton.addEventListener('click', function () {
        menuButton.classList.toggle('is-active');
        mobileMenu.classList.toggle('is-active');

    })
}