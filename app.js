/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let num1 = '';
let num2 = '';
let operator = '';
let result = 0;

/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const value = event.target.innerText;
        if (value === 'C') {
            clear();
        } else if (value === '=') {
            calculate();
        } else if (value >= '0' && value <= '9') {
            handleNumber(value);
        } else {
            handleOperator(value);
        }
    });
});

/*-------------------------------- Functions --------------------------------*/
const handleNumber = (value) => {
    if (operator === '') {
        num1 += value;
        display.innerText = num1;
    } else {
        num2 += value;
        display.innerText = num2;
    }
}

const handleOperator = (value) => {
    if (num1 && num2) {
        calculate();
    }
    operator = value;
}

const calculate = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (operator === '+') {
        result = number1 + number2;
    } else if (operator === '-') {
        result = number1 - number2;
    } else if (operator === '*') {
        result = number1 * number2;
    } else if (operator === '/') {
        result = number1 / number2;
    } else {
        return;
    }
    display.innerText = result;
    num1 = '';
    num2 = '';
    operator = '';
}

const clear = () => {
    num1 = '';
    num2 = '';
    operator = '';
    result = 0;
    display.innerText = '';
}