// Function to handle smooth scrolling to a section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }
  
  // Function to handle button click events
  function handleButtonClick(event) {
    event.preventDefault();
    const sectionId = event.target.dataset.section;
    scrollToSection(sectionId);
  }
  
  // Add click event listeners to the buttons
  document.addEventListener('DOMContentLoaded', function() {
    const homeButton = document.getElementById('home-button');
    const aboutButton = document.getElementById('about-button');
    const servicesButton = document.getElementById('services-button');
  
    homeButton.addEventListener('click', handleButtonClick);
    aboutButton.addEventListener('click', handleButtonClick);
    servicesButton.addEventListener('click', handleButtonClick);
  });
  // JavaScript code to handle the slideshow functionality
const slideshowItems = document.querySelectorAll('.slideshow-item');
let currentIndex = 0;

function showSlide(index) {
  slideshowItems.forEach((item, i) => {
    item.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slideshowItems.length;
  showSlide(currentIndex);
}

// Automatically transition to the next slide every 3 seconds
setInterval(nextSlide, 3000);

  