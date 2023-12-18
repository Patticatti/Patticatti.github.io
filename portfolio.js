// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
    // Get all portfolio boxes
    var portfolioBoxes = document.querySelectorAll('#portfolio-box');

    // Create an object to store portfolio boxes based on tags
    var tagMapping = {};

    // Loop through each portfolio box
    portfolioBoxes.forEach(function (box) {
        // Get tags from the portfolio box
        var tags = box.querySelector('.tags').innerText.split(',');

        // Loop through each tag
        tags.forEach(function (tag) {
            var trimmedTag = tag.trim();
            
            // If the tag is not in the mapping object, create an array for it
            if (!tagMapping[trimmedTag]) {
                tagMapping[trimmedTag] = [];
            }

            // Append the portfolio box ID to the corresponding tag array
            tagMapping[trimmedTag].push(box.id);
        });
    });

    // Function to display portfolio boxes based on a tag
    function displayPortfolioBoxes(tag) {
        // Get the array of portfolio box IDs for the specified tag
        var boxIds = tagMapping[tag];

        // Hide all portfolio boxes
        portfolioBoxes.forEach(function (box) {
            box.style.display = 'none';
        });

        // Display only the portfolio boxes with the specified tag
        if (boxIds) {
            boxIds.forEach(function (boxId) {
                var box = document.getElementById(boxId);
                if (box) {
                    box.style.display = 'block';
                }
            });
        }
    }

    // Example: Display portfolio boxes with the tag 'design' when a button is clicked
    var designButton = document.getElementById('designButton');
    if (designButton) {
        designButton.addEventListener('click', function () {
            displayPortfolioBoxes('design');
        });
    }
});
