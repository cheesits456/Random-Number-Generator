previous = [];

// Function to generate a random number between min and max (inclusive)
function generateRandomNumber(min, max, decimalPlaces) {
    let value;
    do {
        value = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (previous.includes(value));
    return value / decimalPlaces;
}

// Add event listener to the button
document.getElementById('generate').addEventListener('click', function () {
    let min = parseInt(document.getElementById('min').value, 10);
    let max = parseInt(document.getElementById('max').value, 10);
    let decimalPlaces = parseInt(document.getElementById('decimal-places').value, 10) || 0;
    decimalPlaces = 10 ** decimalPlaces;
    min = min * decimalPlaces;
    max = max * decimalPlaces;
    const randomNumber = generateRandomNumber(min, max, decimalPlaces);
    previous.push(randomNumber);
    document.getElementById('result').textContent = `Random number: ${randomNumber}`;
    document.getElementById('previous').textContent = `Previous numbers: ${previous.join(', ')}`;
});