/*eslint-env browser*/

var coinFlip = Math.round(Math.random());
var choice = prompt("Please select heads or tails: ");


    if (coinFlip===1) {
        if (choice=== 'heads'){
            document.write("The flip was heads and you chose heads...you win!")
        }
        else{
            document.write("The flip was heads but you chose tails...you lose!")
        }
    }
    else{
        if (choice=== 'tails'){
            document.write("The flip was tails and you chose tails...you win!")
        }
        else{
            document.write("The flip was tails but you chose heads...you lose!")
        }
    };