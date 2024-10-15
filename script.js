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
