let input;
let key;

function getInput(event) {
    key = document.querySelector(`button[data-key="${event.keyCode}"]`);
    input = event.target.textContent;
    //on first input: if it's clear, enter, or back, nothing happens
        //if it's a number, it displays the number, replacing the dummy value
        //if it's a decimal, append the decimal after the existing zero
        //if it's an operand, treat 0 as the starting value for the operation
    //on second input, if first was a number:
        //clear and back both clear input, enter causes no change
        //if it's a number, append it after the number
        //if it's a decimal, append the decimal after the number and turn off button
        //if it's an operand, store it along with the number
    //on second input, if first was a decimal:
        //clear and back both clear input, enter causes no change
        //if it's a number, append it after the decimal
        //if it's an operand, cause no change (don't store!)
    //on second input, if first was an operand:
        //clear and back both clear input, enter causes no change
        //if it's a number, display the number, replacing the dummy value
        //if it's a decimal, append the decimal after a 0
    //continue to append numbers to the end of existing numbers
    //num1+num2 will display num2 until the user inputs a new operand or =
    return key;
};

//let displayedNum = document.createTextNode();
document.querySelector(".output-box");


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
        case "−":
            subtract(number, number);
            break;
        case "*":
            multiply(number, number);
            break;
        case "/":
            divide(number, number);
            break;
        default:
            return;
    };
};

const btns = Array.from(document.querySelectorAll(".button"));
btns.forEach(btn => btn.addEventListener("click", getInput));
window.addEventListener("keydown", getInput);