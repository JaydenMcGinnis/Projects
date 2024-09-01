let firstNum = '';
let secondNum = '';
let operator = null;
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
    let answer = 0;
    // use ops corralating function for result
    switch (op) {
        case '+':
            answer = add(a, b);
            break;
        case '-':
            answer = subtract(a, b);
            break;
        case '*':
            answer = multiply(a, b);
            break;
        case '/':
            answer = devide(a, b)
            break;
    }
    display.textContent = answer;
}

function getFirstNumber(number) {
    firstNum += number.textContent
    display.textContent = firstNum;
}

function getSecondNumber(number) {
    secondNum += number.textContent
    display.textContent = secondNum;
}

function calculate() {
    // Onclick for number
    const row = document.querySelectorAll('.number');
    row.forEach((number) => {
        number.addEventListener('click', () => {
            if (operator === null) {
                getFirstNumber(number)
            } else {
                getSecondNumber(number)
            }
})})

    // When equal is pressed
    const equal = document.querySelector('.equal')
    equal.addEventListener('click', () => {
        operate(firstNum, secondNum, operator)
    })

    // Update operator variable
    const getOperator = document.querySelectorAll('.operator')
    getOperator.forEach((oper) => {oper.addEventListener('click', (op) => {
        operator = op.target.textContent
    })})

    const del = document.querySelector('.delete')
    del.addEventListener('click', () => {
        firstNum = '';
        secondNum = '';
        operator = null;
        display.textContent = 0;
    })

}

calculate()