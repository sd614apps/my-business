function exploreMore() {
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
}

var slideIndex = 0;
var slideInterval;

// Function to move slides manually
function moveSlide(n) {
    clearInterval(slideInterval); // Clear the existing interval
    slideIndex += n;
    showSlides();
    startSlideInterval(); // Restart the interval
}

// Function to show slides
function showSlides() {
    var slides = document.getElementsByClassName('service-slide');
    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
}

// Function to start the auto slideshow
function startSlideInterval() {
    slideInterval = setInterval(function() {
        slideIndex++;
        showSlides();
    }, 5000);
}

// Start the slideshow when the modal is opened
function openServicesModal() {
    var modal = document.getElementById('servicesModal');
    modal.style.display = 'block';
    showSlides(); // Show the current slide
    startSlideInterval(); // Start the slideshow
}

// Stop the slideshow when the modal is closed
function closeServicesModal() {
    var modal = document.getElementById('servicesModal');
    modal.style.display = 'none';
    clearInterval(slideInterval);
}
