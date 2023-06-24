// Adding the hover effect of the navbar (the styles are on the index.css file)
const menuStartOption = document.querySelector('#nav-start');
const menuAboutOption = document.querySelector('#nav-about');
const menuCollectionOption = document.querySelector('#nav-collection');
const menuExploreOption = document.querySelector('#nav-explore');
const menuStartCircle = document.querySelector('#nav-circle-start');
const menuABoutCircle = document.querySelector('#nav-circle-about');
const menuCollectionCircle = document.querySelector('#nav-circle-collection');
const menuExploreCircle = document.querySelector('#nav-circle-explore');

menuStartOption.addEventListener('mouseover', function () {
    menuStartCircle.classList.toggle('start-active');
})

menuStartOption.addEventListener('mouseout', function () {
    menuStartCircle.classList.remove('start-active');
})

menuAboutOption.addEventListener('mouseover', function () {
    menuABoutCircle.classList.toggle('about-active');
})

menuAboutOption.addEventListener('mouseout', function () {
    menuABoutCircle.classList.remove('about-active');
})

menuCollectionOption.addEventListener('mouseover', function () {
    menuCollectionCircle.classList.toggle('collection-active');
})

menuCollectionOption.addEventListener('mouseout', function () {
    menuCollectionCircle.classList.remove('collection-active');
})

menuExploreOption.addEventListener('mouseover', function () {
    menuExploreCircle.classList.toggle('explore-active');
})

menuExploreOption.addEventListener('mouseout', function () {
    menuExploreCircle.classList.remove('explore-active');
})

// Adding the menu for small devices
const menuButton = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile')

menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('is-active');
    mobileNav.classList.toggle('active');
})

menuStartOption.addEventListener('click', function() {
    menuButton.classList.remove('is-active');
    mobileNav.classList.remove('active');
})

menuAboutOption.addEventListener('click', function() {
    menuButton.classList.remove('is-active');
    mobileNav.classList.remove('active');
})

menuCollectionOption.addEventListener('click', function() {
    menuButton.classList.remove('is-active');
    mobileNav.classList.remove('active');
})

menuExploreOption.addEventListener('click', function() {
    menuButton.classList.remove('is-active');
    mobileNav.classList.remove('active');
})


//Pop-up image from the photo grid
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const images = document.querySelectorAll(".photo-grid img");

images.forEach((image) => {
    image.addEventListener("click", function () {
        const src = this.src;
        modalImage.src = src;
        modal.style.display = "block";
    });
});

function closeModal() {
    modal.style.display = "none";
}