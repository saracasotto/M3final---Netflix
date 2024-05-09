// Select all elements with the class 'movies' and iterate over them
let containers = document.querySelectorAll('.movies');

containers.forEach(function(container) {
    let isScrolling = false; // Variable to track scrolling state

    // Add a wheel event listener to the container to handle scrolling
    container.addEventListener('wheel', function(event) {
        event.preventDefault(); // Prevent default scrolling behavior
        this.scrollLeft += event.deltaY; // Scroll horizontally based on wheel movement
        isScrolling = true; // Set scrolling state to true

        // Reset scrolling state after 100 milliseconds
        setTimeout(function() {
            isScrolling = false;
        }, 100);
    });

    // Add a mouseover event listener to the container to handle image enlargement
    container.addEventListener('mouseover', function(event) {
        // Check if not currently scrolling
        if (!isScrolling) {
            // Check if the target element is an image
            if (event.target.tagName === 'IMG') {
                event.target.classList.add('enlarge'); // Add enlarge class to the image
            }
        }
    });

    // Add a mouseout event listener to the container to handle image shrinkage
    container.addEventListener('mouseout', function(event) {
        // Check if the target element is an image
        if (event.target.tagName === 'IMG') {
            event.target.classList.remove('enlarge'); // Remove enlarge class from the image
        }
    });
});

// Function to adjust section opacity based on scroll position
function setSectionOpacity() {
    let sections = document.querySelectorAll('section'); // Select all sections
    let windowHeight = window.innerHeight; // Get browser window height
    let scrollPosition = window.scrollY || window.scrollY; // Get scroll position

    // Iterate over each section
    sections.forEach(function(section) {
        let sectionTop = section.offsetTop; // Get section's top position relative to document

        // Calculate distance of section from top of browser window
        let sectionInView = sectionTop - windowHeight + 150;

        // Set opacity based on scroll position
        if (scrollPosition >= sectionInView) {
            section.style.opacity = 1; // Set opacity to 1 if section is in view
        } else if (scrollPosition < sectionTop) {
            section.style.opacity = 0; // Set low opacity for sections above the window
        }
    });
}

// Add a scroll event listener to update section opacity on scroll
window.addEventListener('scroll', setSectionOpacity);

// Call the function to set initial section opacity
setSectionOpacity();
