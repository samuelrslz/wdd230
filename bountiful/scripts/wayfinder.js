document.addEventListener("DOMContentLoaded", function() {
    // Get the current page URL
const currentPageURL = window.location.href;

// Get all the navigation links
const navLinks = document.querySelectorAll('.navigation a');

// Loop through each link to check if its href matches the current page URL
navLinks.forEach(link => {
    if (link.href === currentPageURL) {
        link.classList.add('active'); // Add the 'active' class to the matching link
    }
});
});