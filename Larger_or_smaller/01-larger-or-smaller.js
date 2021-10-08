/*eslint-env browser*/

var firstNumber;
var secondNumber;

firstNumber= parseInt(window.prompt("Enter A"), 10);
secondNumber= parseInt(window.prompt("Enter B"), 10);

if (firstNumber > secondNumber) {
    window.document.write("A:" + " " + firstNumber + " " + "is greater.")
}
else if (firstNumber < secondNumber) {
    window.document.write("B:" + " " + secondNumber + " " + "is greater.")
}
else {
    window.document.write("Both number are equal, A=B")
};