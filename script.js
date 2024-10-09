<script>

    const imageSources = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpeg', 'image5.jpg'];

   
    let currentIndex = 0;

    
    function changeImage(imageSrc) {
        document.getElementById('mainImage').src = imageSrc;
        currentIndex = imageSources.indexOf(imageSrc); // Update the current index
    }

    // Function to change the modal image
    function changeModalImage() {
        const modalImage = document.getElementById('modalImage');
        modalImage.src = imageSources[currentIndex]; // Set the modal image source
    }

    // Function to open the modal
    function openModal() {
        const modal = document.getElementById('imageModal');
        modal.style.display = "flex"; // Show the modal with flex
        changeModalImage(); // Update the modal image when opening
    }

    // Function to close the modal
    function closeModal(event) {
        if (event) event.stopPropagation(); // Prevent the click on the close button from triggering the modal close
        const modal = document.getElementById('imageModal');
        modal.style.display = "none"; // Hide the modal
    }

    // Function to show the next image
    function nextImage() {
        currentIndex = (currentIndex + 1) % imageSources.length;  // Loop over the images
        changeModalImage();
    }

    // Function to show the previous image
    function prevImage() {
        currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;  // Loop to the previous image
        changeModalImage();
    }

    // Set initial state of the modal to be hidden
    document.getElementById('imageModal').style.display = "none";
</script>
