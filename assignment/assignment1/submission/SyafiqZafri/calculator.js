function addToInput(value) {
    document.getElementById('display').value += value;
}

function clearInput() {
    document.getElementById('display').value = '';
}

function backspace() {
    var input = document.getElementById('display');
    input.value = input.value.slice(0, -1);
}

function calculate() {
    var input = document.getElementById('display');
    var result = eval(input.value);
    input.value = result;
}
