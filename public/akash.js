const buttonNumber = document.getElementById("button-number");
const buttonName = document.getElementById("button-name");
const rootTag = document.getElementById("root");

buttonNumber.addEventListener('click',fNumber);
buttonName.addEventListener('click',fName);

function fNumber() {
const n1 = Math.floor(Math.random() * 100);
const n2 = Math.floor(Math.random() * 100);
rootTag.innerHTML = 'your lucky numbers are'
    +n1 + ' and ' + n2;
}

function fName() {
    console.log('Name button is clicked');
    rootTag.innerHTML = 'my name is Akash';
}
