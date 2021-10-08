/*eslint-env browser*/

var i = parseInt(window.prompt("Enter the desrired value for Countdown"), 10);

for(i = i; i >= 0; i -= 1){
    document.write(i + "<br>");
};