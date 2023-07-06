const menuButton = document.querySelector('.hamburger');
const menuMobile = document.querySelector('.nav-links');

menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('is-active');
    menuMobile.classList.toggle('active');
});

window.addEventListener('scroll', function() {
    var scrollToTopButton = document.getElementById('scrollToTopButton');
  
    // Check if the user has scrolled past the first section
    if (window.scrollY > document.querySelector('.section-one').offsetHeight) {
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