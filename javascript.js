let storedValue;
let operator;
let output;

function doMath () {
    if (storedValue !== undefined && operator !== undefined) {
        output = document.querySelector(".text-content");
        let result = operate(operator, storedValue, Number(output.textContent));
        createText(result);
        text.setAttribute("name", "noAppend");
        output.replaceWith(text);
        storedValue = result;
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
    storedValue = undefined;
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

function display(input) {
    let value = input;
    output = document.querySelector(".text-content");
    if(Number(isNaN(output.textContent)) || (output.getAttribute("name") === "noAppend")) {
        createText(value);
        output.replaceWith(text);
    }
    else {
        output.appendChild(document.createTextNode(value));
    }
};

function getInput(input) {
    let value = input;
    output = document.querySelector(".text-content");
    if (storedValue === undefined || operator === undefined) {
        storedValue = Number(output.textContent);
        createText("|");
        output.replaceWith(text);
        operator = value;
        return operator;
    }
    else { 
        let result = operate(operator, storedValue, Number(output.textContent));
        createText(result);
        storedValue = Number(text.textContent);
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

function createText(content) {
    text = document.createElement("p");
    text.setAttribute("class", "text-content");
    text.textContent = content;
};

const numBtns = Array.from(document.querySelectorAll(".number"));
numBtns.forEach(numBtn => numBtn.addEventListener("click", (e) => display(e.target.textContent)));

const opBtns = Array.from(document.querySelectorAll(".operator"));
opBtns.forEach(opBtn => opBtn.addEventListener("click", (e) => getInput(e.target.textContent)));

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", clear);

const eqlBtn = document.querySelector("#equals");
eqlBtn.addEventListener("click", doMath);

const undoBtn = document.querySelector("#undo");
undoBtn.addEventListener("click", undo);

const decBtn = document.querySelector("#decimal");
decBtn.addEventListener("click", addPoint);