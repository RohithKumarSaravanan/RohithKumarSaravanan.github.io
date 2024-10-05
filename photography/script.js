<script>
    // Array of image sources for the slideshow
    const imageSources = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];

    // Current index of the slideshow
    let currentIndex = 0;

    // Function to change the main image
    function changeImage(imageSrc) {
        document.getElementById('mainImage').src = imageSrc;
    }

    // Function to change the image automatically
    function autoChangeImage() {
        currentIndex = (currentIndex + 1) % imageSources.length;  // Loop over the images
        changeImage(imageSources[currentIndex]);
    }

    // Set interval to automatically change image every 30 seconds (30000 ms)
    setInterval(autoChangeImage, 30000);
</script>
