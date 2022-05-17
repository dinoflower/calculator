function add (a, b) {
    return a + b;
};

function subtract (a, b) {
    return a - b;
};

function multiply (a, b) {
    return a * b;
};

function divide (a, b) {
    return a / b;
};

function operate (operator, number, number) {
    switch (operator) {
        case "+":
            add(number, number);
            break;
        case "-":
            subtract(number, number);
            break;
        case "*":
            multiply(number, number);
            break;
        case "/":
            divide(number, number);
            break;
    };
};