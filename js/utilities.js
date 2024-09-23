function getInputValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextFieldValueById(id) {
    const textFiled = document.getElementById(id).innerText;
    const textNumber = parseFloat(textFiled);
    return textNumber;
}

function showSectionById(id) {
    document.getElementById('show-donation').classList.add('hidden');
    document.getElementById('show-history').classList.add('hidden');
    // SHOW TO INDIVIDUAL SECTOIN
    document.getElementById(id).classList.remove('hidden');
}