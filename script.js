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
const dynamicContent = document.getElementById('dynamic-content');

// Define content for each menu item
const contentMap = {
    home: {
        heading: "Welcome to My Website",
        content: "This is the home page of the website."
    },
    about: {
        heading: "About Us",
        content: "Learn more about our mission, vision, and values."
    },
    services: {
        heading: "Our Services",
        content: "We offer a range of services to meet your needs."
    },
    contact: {
        heading: "Contact Us",
        content: "Get in touch with us for more information."
    }
};

// Function to update the content dynamically
function updateContent(section) {
    const { heading, content } = contentMap[section];
    dynamicHeading.textContent = heading;
    dynamicContent.textContent = content;
}

// Add event listeners to each menu item
document.getElementById('home-link').addEventListener('click', () => updateContent('home'));
document.getElementById('about-link').addEventListener('click', () => updateContent('about'));
document.getElementById('services-link').addEventListener('click', () => updateContent('services'));
document.getElementById('contact-link').addEventListener('click', () => updateContent('contact'));