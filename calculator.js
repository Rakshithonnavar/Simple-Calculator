document.addEventListener("DOMContentLoaded", function () {
    const inputBox = document.getElementById("inputBox");
    let resultDisplayed = false;  // Flag to track whether result is displayed or not

    // Function to update the input box
    function updateInput(value) {
        if (resultDisplayed) {
            inputBox.value = "";
            resultDisplayed = false;
        }
        inputBox.value += value;
    }

    

    // Event listener for button clicks
    document.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", (event) => {
            const buttonValue = event.target.innerText;

            if (buttonValue === "AC") {
                inputBox.value = "0";
            } else if (buttonValue === "DEL") {
                inputBox.value = inputBox.value.slice(0, -1);
            } else if (buttonValue === "CLEAR") {
                inputBox.value = "";
            } else if (buttonValue === "=") {
                try {
                    inputBox.value = eval(inputBox.value);
                    resultDisplayed = true;
                } catch (error) {
                    inputBox.value = "Error";
                    resultDisplayed = true;
                }
            } else {
                updateInput(buttonValue);
            }
        });
    });
});

let inputBox = document.getElementById('inputBox');

function appendValue(value) {
    inputBox.value += value;
}

function clearDisplay() {
    inputBox.value = '';
}

function deleteLast() {
    inputBox.value = inputBox.value.slice(0, -1);
}

function calculate() {
    let result = eval(inputBox.value);
    inputBox.value = result;
}

function calculateSquareRoot() {
    let inputValue = parseFloat(inputBox.value);
    if (!isNaN(inputValue)) {
        inputBox.value = Math.sqrt(inputValue);
    } else {
        inputBox.value = 'Invalid Input';
    }
}
