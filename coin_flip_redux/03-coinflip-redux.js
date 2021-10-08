/*eslint-env browser*/
var coinFlip;
var i;
for (i=1; i<=10; i += 1){
    coinFlip = Math.round(Math.random())
    if(coinFlip===0){
        document.write("Heads" + "<br>");
    }
    else{
        document.write("Tails" + "<br>");
    }

}