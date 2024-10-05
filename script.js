let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function changeSlide(n) {
    currentSlide += n;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Wrap to last slide
    } else if (currentSlide >= slides.length) {
        currentSlide = 0; // Wrap to first slide
    }
    showSlide(currentSlide);
}

// Show the first slide
showSlide(currentSlide);

// Keyboard Navigation
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        changeSlide(1);
    } else if (event.key === 'ArrowLeft') {
        changeSlide(-1);
    }
});

// Autoplay Feature
setInterval(() => {
    changeSlide(1);
}, 5000); // Change slide every 5 seconds

// Function to open the modal
function openModal() {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modal.style.display = "block"; // Show the modal
    modalImage.src = document.getElementById('mainImage').src; // Set the modal image source
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = "none"; // Hide the modal
}
