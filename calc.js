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

    eq = document.getElementById('operate')
    eq.addEventListener('click', function() {evalPressed(screen)})
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
    if(noReset){
    calcs.push(screen.innerText)
    screen.innerText = '';
    operands.push(operand);
    console.log(operands);
    noReset = false;
    }
}

function evalPressed(screen)
{
    calcs.push(screen.innerText)
    let evaluation = '';
    //screen.innerText = eval(evaluation);

    for (let i = 0; i < operands.length; i++)
    {
        evaluation = evaluation + calcs.shift() + operands.shift()
    }
    evaluation = evaluation + calcs.shift()
    screen.innerText = eval(evaluation);
    console.log(evaluation);
    calcs.push(screen.innerText);

}




init();