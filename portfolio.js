document.addEventListener("DOMContentLoaded", function () {
    function showProject(button) {
        const projectModal = document.getElementById('projectModal');
        const projectImg = document.getElementById('projectImg');
        const closeButton = document.getElementById('closeButton');
    
        // Get the title and details from the sibling elements of the button
        const title = button.nextElementSibling.querySelector('h2').innerText;
        const details = Array.from(button.nextElementSibling.querySelectorAll('h5')).map(h5 => h5.innerText).join(', ');
    
        // Set the title and details in the modal
        document.getElementById('projectTitle').innerText = title;
        document.getElementById('projectDetails').innerText = details;
    
        // Set the image source based on the src attribute of the button's child (img element)
        const imgSrc = button.querySelector('.project-img').src;
        projectImg.src = imgSrc;
    
        // Display the modal
        projectModal.style.display = 'block';
    
        // Disable scrolling on the body while the modal is open
        document.body.style.overflow = 'hidden';
    }
    
    // Close the modal if the user clicks outside the modal content or on the close button
    window.onclick = function(event) {
        const projectModal = document.getElementById('projectModal');
        const closeButton = document.getElementById('closeButton');
    
        if (event.target === projectModal || event.target === closeButton) {
            closeProject();
        }
    };
    
    function closeProject() {
        const projectModal = document.getElementById('projectModal');
    
        // Hide the modal
        projectModal.style.display = 'none';
    
        // Enable scrolling on the body
        document.body.style.overflow = 'auto';
    }
});