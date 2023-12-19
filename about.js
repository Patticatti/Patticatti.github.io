document.addEventListener("DOMContentLoaded", function () {
    // Get the hobby buttons and hobby image
    var hobbyButtons = document.querySelectorAll('.hobby-button');
    var hobbyImage = document.querySelector('.hobby-image');
    
    // Add click event listeners to each hobby button
    hobbyButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Get the image source from the data-image attribute
            var newImageSrc = button.getAttribute('data-image');
            
            // Update the hobby image source
            hobbyImage.src = newImageSrc;
            
            // Update the hobby description or perform any other actions if needed
            var hobbyDescription = button.innerText;
            document.querySelector('.hobby-desc h5').innerText = hobbyDescription;
        });
    });
});
