// JavaScript to Toggle Navigation Menu
document.querySelector('.Menu').addEventListener('click', () => {
    document.querySelector('.nav-link').classList.toggle('active');
});
  // Array of background image URLs for the .headers section
  const headerImages = [
    'images/gallery-2.jpg',
    'images/pidurangala2.jpg',
    'images/Weligama.jpg',
    'images/dikwalla.jpg'
];

let currentIndex = 0;

// Function to change the background image
function changeHeaderBackground() {
    const headersElement = document.querySelector('header');
    headersElement.style.backgroundImage = `url(${headerImages[currentIndex]})`;
    currentIndex = (currentIndex + 1) % headerImages.length; // Loop back to the first image
}

// Change background every 5 seconds
setInterval(changeHeaderBackground, 3000);

// Set initial background
changeHeaderBackground();

