let display = document.getElementById('display');

function appendChar(char) {
    display.value += char;
}

function clearing() {
    display.value = '';
}

function showResult() {
    display.value = eval(display.value);
}

function sino() {
    let expression = display.value;
    let angleInDegrees = expression;
    if (!isNaN(angleInDegrees)) {
        let angleInRadians = angleInDegrees * Math.PI / 180;
        display.value = Math.sin(angleInRadians);
    } else {
        display.value = 'Invalid Input';
    }
}

function coso() {
    let expression = display.value;
    let angleInDegrees = expression;
    if (!isNaN(angleInDegrees)) {
        let angleInRadians = angleInDegrees * Math.PI / 180;
        display.value = Math.cos(angleInRadians);
    } else {
        display.value = 'Invalid Input';
    }
}

    function deleteLastNumber() {
        display.value = display.value.substring(0, display.value.length - 1);
    }
