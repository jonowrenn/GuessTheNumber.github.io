document.getElementById('submitGuess').addEventListener('click', function() {
    var numberToGuess = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    var userGuess = parseInt(document.getElementById('guess').value);
    var resultText = '';

    if (userGuess < 1 || userGuess > 100) {
        resultText = 'Invalid guess. Try again.';
    } else if (userGuess < numberToGuess) {
        resultText = 'Higher, try again.';
    } else if (userGuess > numberToGuess) {
        resultText = 'Lower, try again.';
    } else {
        resultText = 'Correct, you\'ve guessed the number!';
    }

    document.getElementById('result').innerText = resultText;
});
