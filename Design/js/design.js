const pjOne = document.querySelector('#proone');
const hoverPjOne = document.querySelector('#hoverone')

const pjTwo = document.querySelector('#protwo');
const hoverPjTwo = document.querySelector('#hovertwo')

const pjThree = document.querySelector('#prothree');
const hoverPjThree = document.querySelector('#hoverthree')

const pjFour = document.querySelector('#profour');
const hoverPjFour = document.querySelector('#hoverfour')

pjOne.addEventListener('mouseover', function () {
    hoverPjOne.classList.toggle('active');
})
pjOne.addEventListener('mouseout', function () {
    hoverPjOne.classList.remove('active');
})

pjTwo.addEventListener('mouseover', function () {
    hoverPjTwo.classList.toggle('active');
})
pjTwo.addEventListener('mouseout', function () {
    hoverPjTwo.classList.remove('active');
})

pjThree.addEventListener('mouseover', function () {
    hoverPjThree.classList.toggle('active');
})
pjThree.addEventListener('mouseout', function () {
    hoverPjThree.classList.remove('active');
})

pjFour.addEventListener('mouseover', function () {
    hoverPjFour.classList.toggle('active');
})
pjFour.addEventListener('mouseout', function () {
    hoverPjFour.classList.remove('active');
})


const menuButton = document.querySelector('.hamburger');
const menuMobile = document.querySelector('.nav-links');

menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('is-active');
    menuMobile.classList.toggle('active');
});

window.addEventListener('scroll', function() {
    var scrollToTopButton = document.getElementById('scrollToTopButton');
  
    // Check if the user has scrolled past a certain height (adjust as needed)
    if (window.scrollY > 500) {
      scrollToTopButton.classList.add('show');
    } else {
      scrollToTopButton.classList.remove('show');
    }
});

document.getElementById('scrollToTopButton').addEventListener('click', function(e) {
    e.preventDefault();
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
