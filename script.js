// JavaScript to control card navigation
let currentCard = 1;
const totalCards = document.querySelectorAll('.flip-card').length;

document.getElementById('card-' + currentCard).classList.add('active');

// Function to show the next card
function showNextCard() {
    if (currentCard < totalCards) {
        document.getElementById('card-' + currentCard).classList.remove('active');
        currentCard++;
        document.getElementById('card-' + currentCard).classList.add('active');
    }
    updateButtons();
}

// Function to show the previous card
function showPreviousCard() {
    if (currentCard > 1) {
        document.getElementById('card-' + currentCard).classList.remove('active');
        currentCard--;
        document.getElementById('card-' + currentCard).classList.add('active');
    }
    updateButtons();
}

// Function to enable/disable buttons based on current card
function updateButtons() {
    document.getElementById('prevBtn').disabled = currentCard === 1;
    document.getElementById('nextBtn').disabled = currentCard === totalCards;
}

// Initialize button states on load
updateButtons();
