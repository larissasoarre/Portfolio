window.onload = function () {
    const menuButton = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-nav-container')

    menuButton.addEventListener('click', function () {
        menuButton.classList.toggle('is-active');
        mobileMenu.classList.toggle('is-active');
    })
}


window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let smile = document.getElementById("header-smile-id");
    smile.style.transform = "rotate(" + window.pageYOffset/1.5 + "deg)";
}