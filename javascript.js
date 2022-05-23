let runningArray = [];
let operator;
let output;

function doMath () {
    if (runningArray.length >= 1 && operator !== undefined) {
        output = document.querySelector(".text-content");
        arrayItem = Number(output.textContent);
        runningArray.push(arrayItem);
        let result = operate(operator, runningArray[runningArray.length-2], runningArray[runningArray.length-1]);
        createText(result);
        text.setAttribute("name", "noAppend");
        output.replaceWith(text);
    }
    operator = undefined;
};

function addPoint() {
    output = document.querySelector(".text-content");
    if (isNaN(output.textContent)) {
        createText("0.");
        output.replaceWith(text);
    }
    else if (Number.isInteger(Number(output.textContent))) {
        output.appendChild(document.createTextNode("."));
    }
};

function clear() {
    output = document.querySelector(".text-content");
    createText("|");
    output.replaceWith(text);
    runningArray = [];
    operator = undefined;
};

function undo() {
    output = document.querySelector(".text-content");
    if ((output.textContent.slice(0, -1)) === "") {
        createText("|");
    }
    else {
        createText(output.textContent.slice(0, -1));
    }
    output.replaceWith(text);
};

function display(event) {
    let value = event.target.textContent;
    output = document.querySelector(".text-content");
    if(Number(isNaN(output.textContent)) || (output.getAttribute("name") === "noAppend")) {
        createText(value);
        output.replaceWith(text);
    }
    else {
        output.appendChild(document.createTextNode(value));
    }
};

//currently operators variables cause abrupt operation on previous array values with repeated getInput() calls

function getInput(event) {
    runningArray.push(Number((document.querySelector(".text-content")).textContent))
    let value = event.target.textContent;
    output = document.querySelector(".text-content");
    if (runningArray.length === 1 || !operator) {
        createText("|");
        output.replaceWith(text);
        operator = value;
        return operator;
    }
    else { 
        let result = operate(operator, runningArray[runningArray.length-2], runningArray[runningArray.length-1]);
        createText(result);
        text.setAttribute("name", "noAppend");
        output.replaceWith(text);
        operator = value;
        return operator;
    }
};

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

//remember to implement rounding

function createText(content) {
    text = document.createElement("p");
    text.setAttribute("class", "text-content");
    text.textContent = content;
};

//key = document.querySelector(`button[data-key="${event.keyCode}"]`); <- can you do element.querySelector?


const numBtns = Array.from(document.querySelectorAll(".number"));
numBtns.forEach(numBtn => numBtn.addEventListener("click", display));

const opBtns = Array.from(document.querySelectorAll(".operator"));
opBtns.forEach(opBtn => opBtn.addEventListener("click", getInput));

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", clear);

const eqlBtn = document.querySelector("#equals");
eqlBtn.addEventListener("click", doMath);

const undoBtn = document.querySelector("#undo");
undoBtn.addEventListener("click", undo);

const decBtn = document.querySelector("#decimal");
decBtn.addEventListener("click", addPoint);

//window.addEventListener("keydown", detectButton);