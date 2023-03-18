//Navbar Hamburger

window.onload = function () {
    const menuButton = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-nav-container');
    const navItemAboutMe = document.querySelector('.nav-list-aboutme');
    const navItemProjects = document.querySelector('.nav-list-projects');
    const navItemContact = document.querySelector('.nav-list-contact');
    const timesClicked = 1

    menuButton.addEventListener('click', function () {
        menuButton.classList.toggle('is-active');
        mobileMenu.classList.toggle('is-active');

    })

    navItemAboutMe.addEventListener('click', function () {
        mobileMenu.classList.toggle('toggle-back');
        menuButton.classList.remove('is-active');
    })

    navItemProjects.addEventListener('click', function () {
        mobileMenu.classList.toggle('toggle-back');
        menuButton.classList.remove('is-active');
    })

    navItemContact.addEventListener('click', function () {
        mobileMenu.classList.toggle('toggle-back');
        menuButton.classList.remove('is-active');
    })

    menuButton.addEventListener('click', function () {
        mobileMenu.classList.remove('toggle-back');
        menuButton.classList.toggle('is-active');
    })

}



//Invert colors

const invertedTheme = document.getElementById('inverted-theme');
const blueOpacity = document.querySelector(".text")

invertedTheme.onclick = function () {
    document.body.classList.toggle("inverted-theme");
    document.body.style.transition = '.1s';
    blueOpacity.classList.toggle('blue-opacity')
}

//Header smile

window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let smile = document.getElementById("header-smile-id");
    smile.style.transform = "rotate(" + window.pageYOffset / 1.5 + "deg)";
}


//   Web Slider
const swiper = new Swiper(".mySwiper", {
    breakpoints: {
        0: {
            slidesPerView: 1
        },
    
        730: {
            slidesPerView: 2,
        },
    
        1050: {
            slidesPerView: 3
        },
    },
    spaceBetween: 0,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// SLIDE LAPTOP FROM RIGHT

const sliders = document.querySelectorAll(".slide-in")

sliders.forEach(slider => {
    appearOnScrool.observe(slider)
})