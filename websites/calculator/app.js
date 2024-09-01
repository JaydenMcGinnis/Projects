// Function that takes in two numbers and an operator
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b;
}

function devide(a, b) {
    return a / b;
}


let firstNum = '';
let secondNum = '';
let operator = null;

function operate(a, b, op) {
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

function getFirstNumber(number) {
    firstNum += number.textContent
    console.log(firstNum)
}

function getSecondNumber(number) {
    secondNum += number.textContent
    console.log(secondNum)
}

// Onclick for number
const row = document.querySelectorAll('.number');
row.forEach((number) => {
    number.addEventListener('click', () => {
        if (operator === null) {
            getFirstNumber(number)
        } else {
            getSecondNumber(number)
        }
    })
})

const equal = document.querySelector('.equal')
equal.addEventListener('click', () => operate(firstNum, secondNum, operator))

