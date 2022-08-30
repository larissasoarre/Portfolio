// const hamburger = document.getElementsByClassName('hamburger') [0]
// const navLinks = document.getElementsByClassName('nav-links')[0]

// hamburger.addEventListener('click', () => {
//     navLinks.classList.toggle('active')
// })


// -------test 

//Navbar Hamburger

window.onload = function () {
    const menuButton = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-nav-container');

    menuButton.addEventListener('click', function () {
        menuButton.classList.toggle('is-active');
        mobileMenu.classList.toggle('is-active');

    })
}