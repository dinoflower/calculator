let runningArray = [];
let output;
let operator;

function createText(content) {
    text = document.createElement("p");
    text.setAttribute("class", "text-content");
    text.textContent = content;
};

function display(value) {
    output = document.querySelector(".text-content");
    if(isNaN(output.textContent)) {
        createText(value);
        output.replaceWith(text);
    }
    else {
        output.appendChild(document.createTextNode(value));
    }
};

function getInput(event) {
    let value = event.target.textContent;
    if (isNaN(value)) {
        output = document.querySelector(".text-content");
        arrayItem = Number(output.textContent);
        runningArray.push(arrayItem);
        if (runningArray.length === 1) {
            createText("|");
            output.replaceWith(text);
            operator = value;
            return operator;
        }
        else {
            let result = operate(operator, runningArray[runningArray.length-2], runningArray[runningArray.length-1]);
            createText(result);
            output.replaceWith(text);
            if (!(isNaN(result))) {
                runningArray.push(result);
            }
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
    if (b === 0) {
        return "A hollow voice says 'fool'";
    }
    return a / b;
};

function doMath () {
    //if (runningArray.length === 1) {
    //    output = document.querySelector(".text-content");
    //    arrayItem = Number(output.textContent);
    //    text = document.createElement("p");
    //    text.setAttribute("class", "text-content");
    //    runningArray.push(arrayItem);
    //}
    //operate(operator, runningArray[runningArray.length-2], runningArray[runningArray.length-1]);
    //if (!(isNaN(answer))) {
    //    runningArray.push(answer);
    //}

}

function operate (operator, num1, num2) {
    let answer;
    switch (operator) {
        case "+":
            answer = add(num1, num2);
            break;
        case "−":
            answer = subtract(num1, num2);
            break;
        case "x":
            answer = multiply(num1, num2);
            break;
        case "÷":
            answer = divide(num1, num2);
            break;
        default:
            answer = "Nothing happens.";
    };
    return answer;
};

const numBtns = Array.from(document.querySelectorAll(".number"));
numBtns.forEach(numBtn => numBtn.addEventListener("click", getInput));

const opBtns = Array.from(document.querySelectorAll(".operator"));
opBtns.forEach(opBtn => opBtn.addEventListener("click", getInput));

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", clear);

const eqlBtn = document.querySelector("#equals");
eqlBtn.addEventListener("click", doMath);

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