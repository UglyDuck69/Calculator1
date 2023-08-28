// JavaScript code
let currentInput = '';
let display = document.getElementById('display');

function addToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput); // Using eval() for simplicity (not recommended for production)
        display.value = currentInput;
    } catch (error) {
        display.value = currentInput;
        
    }
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}
function clearOneDigit() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}