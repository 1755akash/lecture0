const buttonNumber = document.getElementById("button-number");
const buttonName = document.getElementById("button-name");

buttonNumber.addEventListener('click',fNumber);
buttonName.addEventListener('click',fName);

function fNumber() {
    console.log('number button is clicked');
}

function fName() {
    console.log('Name button is clicked');
}
