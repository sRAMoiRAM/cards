// Get the button element by its ID
const button = document.getElementById('colorSwitcher');

// Define an array of colors to switch between
const colors = ['#3498db', '#2ecc71', '#f1c40f', '#e74c3c', '#9b59b6'];

// Keep track of the current color index
let currentColorIndex = 0;

// Add an event listener to the button
button.addEventListener('click', function() {
    // Change the background color of the body
    document.body.style.backgroundColor = colors[currentColorIndex];
    
    // Increment the color index, loop back to the start if at the end
    currentColorIndex = (currentColorIndex + 1) % colors.length;
});

// Get the dynamic content elements
const dynamicHeading = document.getElementById('dynamic-heading');

// Define content for each menu item
const contentMap = {
    home: {
        heading: "Welcome to My Website",
    },
    about: {
        heading: "About Us",
    },
    services: {
        heading: "Our Services",
    },
    contact: {
        heading: "Contact Us",
    }
};

// Function to update the content dynamically
function updateContent(section) {
    const { heading } = contentMap[section];
    dynamicHeading.textContent = heading;
}

// Add event listeners to each menu item
document.getElementById('home-link').addEventListener('click', () => updateContent('home'));
document.getElementById('about-link').addEventListener('click', () => updateContent('about'));
document.getElementById('services-link').addEventListener('click', () => updateContent('services'));
document.getElementById('contact-link').addEventListener('click', () => updateContent('contact'));