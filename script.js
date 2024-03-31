// Generate the random number once when the page loads
var numberToGuess = Math.floor(Math.random() * 100) + 1;
var numberOfTries = 0;

function submitGuess() {
    var userGuess = parseInt(document.getElementById('guess').value);
    numberOfTries++; // Increment the number of tries on each guess
    var resultText = '';

    // Check if the user guess is valid
    if (!userGuess || userGuess < 1 || userGuess > 100) {
        resultText = 'Invalid guess. Please enter a number between 1 and 100.';
        numberOfTries--; // Don't count this as a valid try
    } else if (userGuess < numberToGuess) {
        resultText = 'Higher, try again.';
    } else if (userGuess > numberToGuess) {
        resultText = 'Lower, try again.';
    } else {
        resultText = `Correct, you've guessed the number in ${numberOfTries} tries!`;
        // Optional: Reset for a new game
        // numberToGuess = Math.floor(Math.random() * 100) + 1;
        // numberOfTries = 0;
        // document.getElementById('guess').value = ''; // Clear the input field
    }

    document.getElementById('result').innerText = resultText;
}

// Event listener for the submit button
document.getElementById('submitGuess').addEventListener('click', submitGuess);

// Event listener for the Enter key in the input field
document.getElementById('guess').addEventListener('keyup', function(event) {
    // Check if the key pressed is Enter
    if (event.key === "Enter") {
        submitGuess(); // Call the submitGuess function
    }
});
