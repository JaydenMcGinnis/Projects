let firstNum = '';
let secondNum = '';
let operator = '';
const display = document.querySelector('.display')
display.textContent = 0;

// Function that takes in two numbers and an operator
function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return Number(a) - Number(b)
}

function multiply(a, b) {
    return a * b;
}

function devide(a, b) {
    return a / b;
}

function operate(a, b, op) {
    // Display update
    a = parseFloat(a)
    b = parseFloat(b)
    // use ops corralating function for result
    switch (op) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return devide(a, b)
    }
}

// Get number
function getNumber(num) {
    secondNum += num
    display.textContent = secondNum
}

// Get operator
function getOperator(op) {
    if (firstNum && secondNum && operator) {
        firstNum = operate(firstNum, secondNum, operator)
        display.textContent = firstNum;
    } else {
        firstNum = secondNum
    }
    operator = op;
    secondNum = '';
}


document.querySelectorAll('.number').forEach(number => {
    number.addEventListener('click', () => getNumber(number.textContent));
});

document.querySelectorAll('.operator').forEach(operator => {
    operator.addEventListener('click', () => getOperator(operator.textContent));
});

document.querySelector('.equal').addEventListener('click', () => {
    display.textContent = operate(firstNum, secondNum, operator)
})

document.querySelector('.delete').addEventListener('click', () => {
    firstNum = '';
    secondNum = '';
    operator = '';
    display.textContent = 0;
})