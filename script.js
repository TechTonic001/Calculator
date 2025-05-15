document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const showAnswer = document.getElementById('showAnswer');
    
    // Get buttons
    const addBtn = document.getElementById('add');
    const subtractBtn = document.getElementById('subtract');
    const multiplyBtn = document.getElementById('multiply');
    const divideBtn = document.getElementById('divide');

    // Add event listeners
    addBtn.addEventListener('click', sum);
    subtractBtn.addEventListener('click', subtraction);
    multiplyBtn.addEventListener('click', multiplication);
    divideBtn.addEventListener('click', divide);

    function divide() {
        const firstNumber = parseFloat(num1.value);
        const secondNumber = parseFloat(num2.value);

        if (isNaN(firstNumber) || isNaN(secondNumber)) {
            showAnswer.textContent = "Please enter valid numbers";
            return;
        }

        if (secondNumber === 0) {
            showAnswer.textContent = "Cannot divide by zero";
            return;
        }

        const quotient = firstNumber / secondNumber;
        showAnswer.textContent = `The answer is ${quotient.toFixed(2)}`;
    }

    function subtraction() {
        const firstNumber = parseFloat(num1.value);
        const secondNumber = parseFloat(num2.value);

        if (isNaN(firstNumber) || isNaN(secondNumber)) {
            showAnswer.textContent = "Please enter valid numbers";
            return;
        }

        const difference = firstNumber - secondNumber;
        showAnswer.textContent = `The answer is ${difference}`;
    }

    function multiplication() {
        const firstNumber = parseFloat(num1.value);
        const secondNumber = parseFloat(num2.value);

        if (isNaN(firstNumber) || isNaN(secondNumber)) {
            showAnswer.textContent = "Please enter valid numbers";
            return;
        }

        const product = firstNumber * secondNumber;
        showAnswer.textContent = `The answer is ${product}`;
    }

    function sum() {
        const firstNumber = parseFloat(num1.value);
        const secondNumber = parseFloat(num2.value);

        if (isNaN(firstNumber) || isNaN(secondNumber)) {
            showAnswer.textContent = "Please enter valid numbers";
            return;
        }

        const total = firstNumber + secondNumber;
        showAnswer.textContent = `The answer is ${total}`;
    }
});