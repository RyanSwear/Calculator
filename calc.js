let calcs = [];
let operands = [];
let noReset = false;


function init(){
    screen = document.getElementById('text');
    screen.innerText = '0.0';

    digits = document.getElementsByClassName('digit');
    for (let i = 0; i < digits.length; i++)
    {
        digits[i].addEventListener('click', function() {digitPressed(screen, digits[i].innerText)});
        
    }

    ops = document.getElementsByClassName('op');
    for (let i = 0; i < ops.length; i++)
    {
        ops[i].addEventListener('click', function() {opPressed(screen, ops[i].innerText)});
        
    }
    //but7 = document.getElementById('but7');
    //but7.addEventListener('click', digitPressed(screen));
}

function digitPressed(screen, number){
    if (noReset){
    screen.innerText = screen.innerText + number;
    }else{
        screen.innerText = number;
        noReset = true;
    }
}

function opPressed(screen, operand)
{
    screen.innerText = '';
    operands.push(operand);
    console.log(operands);
}




init();