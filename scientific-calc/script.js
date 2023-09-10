let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        const result = eval(currentInput);
        currentInput = result.toString();
        document.getElementById('display').value = currentInput;
    } catch (error) {
        currentInput = '';
        document.getElementById('display').value = 'Error';
    }
}

function calculateSine() {
    const value = parseFloat(currentInput);
    if (!isNaN(value)) {
        const result = Math.sin(value);
        currentInput = result.toString();
        document.getElementById('display').value = currentInput;
    } else {
        clearDisplay();
    }
}

function calculateCosine() {
    const value = parseFloat(currentInput);
    if (!isNaN(value)) {
        const result = Math.cos(value);
        currentInput = result.toString();
        document.getElementById('display').value = currentInput;
    } else {
        clearDisplay();
    }
}

function calculateTangent() {
    const value = parseFloat(currentInput);
    if (!isNaN(value)) {
        const result = Math.tan(value);
        currentInput = result.toString();
        document.getElementById('display').value = currentInput;
    } else {
        clearDisplay();
    }
}

function calculateLogarithm() {
    const value = parseFloat(currentInput);
    if (!isNaN(value) && value > 0) {
        const result = Math.log10(value);
        currentInput = result.toString();
        document.getElementById('display').value = currentInput;
    } else {
        clearDisplay();
    }
}

function calculateSquareRoot() {
    const value = parseFloat(currentInput);
    if (!isNaN(value) && value >= 0) {
        const result = Math.sqrt(value);
        currentInput = result.toString();
        document.getElementById('display').value = currentInput;
    } else {
        clearDisplay();
    }
}

function calculatePower() {
    const values = currentInput.split('^');
    if (values.length === 2) {
        const base = parseFloat(values[0]);
        const exponent = parseFloat(values[1]);
        if (!isNaN(base) && !isNaN(exponent)) {
            const result = Math.pow(base, exponent);
            currentInput = result.toString();
            document.getElementById('display').value = currentInput;
        } else {
            clearDisplay();
        }
    } else {
        clearDisplay();
    }
}
