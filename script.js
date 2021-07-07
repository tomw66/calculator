function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    return operator(a, b);
}
const buttons = document.querySelectorAll('button');
const display = document.querySelector('#display');
let variable1 = 0; 
let variable2 = 0;
let mathsOperator = undefined;
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains('number') && mathsOperator === undefined) {
            variable1 += button.innerText;
            display.innerText = variable1.substring(1);
            console.log(variable1);
        }
        else if (button.classList.contains('operator') && variable2 === 0) {
            switch (button.innerText) {
                case '+':
                    mathsOperator = add;
                    break;
                case '−':
                    mathsOperator = subtract;
                    break;
                case '×':
                    mathsOperator = multiply;
                    break;
                case '÷':
                    mathsOperator = divide;
            }
        }
        else if (button.classList.contains('number')) {
            variable2 += button.innerText;
            display.innerText = variable2.substring(1);
            console.log(variable2);
        }
        else if (button.classList.contains('equals') || button.classList.contains('operator')) {
            if (mathsOperator !== undefined) {
                variable1 = operate(mathsOperator, Number(variable1), Number(variable2));
            }
            variable1 = Math.round(variable1 * 1000000) / 1000000;
            variable2 = 0;
            switch (button.innerText) {
                case '+':
                    mathsOperator = add;
                    break;
                case '−':
                    mathsOperator = subtract;
                    break;
                case '×':
                    mathsOperator = multiply;
                    break;
                case '÷':
                    mathsOperator = divide;
            }
            display.innerText = variable1;
        }
        else if (button.classList.contains('clear')) {
            display.innerText = '';
            variable1 = 0;
            variable2 = 0;
            mathsOperator = undefined;
        }
        });
});
//test comment