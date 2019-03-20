function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(operand, a, b) {
    if (operand === "+") {
        return add(a, b);
    } else if (operand === "-") {
        return subtract(a, b);
    } else if (operand === "*") {
        return multiply(a, b);
    } else if (operand === "/") {
        return divide(a, b);
    };
};

let operation = {first: '', second: '', oper: ''};

let buttons = document.querySelectorAll(".button");
buttons.forEach(function(element) {
    element.addEventListener('click', function(e) {
        let display = document.querySelector('.display');
        console.log(e.target.innerHTML);
        if (e.target.classList.contains("number") || e.target.classList.contains("decimal"))  {
            display.innerHTML += e.target.innerHTML;
        } else if (e.target.classList.contains("operator")) {
            if (operation.first === '') {
                operation.first = display.innerHTML;
                operation.oper = e.target.innerHTML;
                display.innerHTML = '';
            };
        } else if (e.target.classList.contains("equal")) {
            operation.second = display.innerHTML;
            let result = operate(operation.oper, Number(operation.first), Number(operation.second));
            display.innerHTML = result;
            operation.first = '';
            operation.second = '';
            operation.oper = '';
        } else if (e.target.classList.contains("clear")) {
            operation.first = '';
            operation.second = '';
            operation.oper = '';
            display.innerHTML = '';
        }
    });
});