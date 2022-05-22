let runningArray = [];
let output;
let operator;

function display(value) {
    output = document.querySelector(".text-content");
    if(isNaN(output.textContent)) {
        firstDigit = document.createElement("p");
        firstDigit.setAttribute("class", "text-content");
        firstDigit.textContent = value;
        output.replaceWith(firstDigit);
    }
    else {
        output.appendChild(document.createTextNode(value));
    }
};

function getInput(event) {
    let value = event.target.textContent;
    if (isNaN(value)) {
        output = document.querySelector(".text-content");
        text = document.createElement("p");
        text.setAttribute("class", "text-content");
        runningArray.push(output.textContent);
        operator = value;
        if (runningArray.length === 1) {
            text.textContent = "|";
            output.replaceWith(text);
            return operator;
        }
        else {
            result = runningArray.reduceRight(operate);
            text.textContent = result;
            output.replaceWith(text);
            while (runningArray.length > 0) {
                runningArray.shift();
            };
            runningArray.push(result);
        }
    }
    else {
        display(value);
    }
};

function clear() {
    output = document.querySelector(".text-content");
    text = document.createElement("p");
    text.setAttribute("class", "text-content");
    text.textContent = "|";
    output.replaceWith(text);
    runningArray = [];
    operator = undefined;
};


// on enter - result = runningArray.reduceRight(operate); (or just make the operate function do this?)
//key = document.querySelector(`button[data-key="${event.keyCode}"]`); <- can you do element.querySelector?


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

const numBtns = Array.from(document.querySelectorAll(".number"));
numBtns.forEach(numBtn => numBtn.addEventListener("click", getInput));
const opBtns = Array.from(document.querySelectorAll(".operator"));
opBtns.forEach(opBtn => opBtn.addEventListener("click", getInput));
const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", clear);

//clear button should make the .text-content | again, empty the array, and un-store the operator
//back button should remove the last [-1] character from .text-content with every click - upon removing the last one, should replace with |
//window.addEventListener("keydown", detectButton);




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