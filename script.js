console.log('%c Calculator ', 'background: #4a64c3ff; color: #fff700ff');   


// basic math function operator

function add(a, b) {
    return a + b
}

function substract(a, b) {
    return a - b
}

function multipply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function roundResult(num) {
    return Math.round(1000*num)/1000
}


// every variable of the calculatore

let firstNum 
let secondNum = 0
let operator 
let nextOperator 
let result
let operatorAvailable = true // to allow operator to operate
let pointAvailable = true // to allow only one '.'


// operate funtion 
function operate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+':
            return roundResult((Number(firstNum) + Number(secondNum)))
            break;
        case '-':
            return roundResult((Number(firstNum) - Number(secondNum)))
            break;
        case 'x':
            return roundResult((Number(firstNum) * Number(secondNum)))
            break;
        case '*':
            return roundResult((Number(firstNum) * Number(secondNum)))
            break;
        case '/':
            if (secondNum == 0) {
                return "ERROR"
            }else{
                return roundResult((Number(firstNum) / Number(secondNum)))
            }
            break;
    }


}




//////////////////////////////////////////////////////////////////////////////////////////
// functions that populate the display
const digitBtn = document.querySelectorAll('.digit-btn')
const display = document.querySelector('#result')


let displayNumber = 0
let newArrNumber = [] // array to concatenate each number pushed in it

// this function populate the display
function populateDisplay(arrValue) {
    if (newArrNumber.length == 10) {
        return
    }
    if (arrValue == '.' && pointAvailable) {
        newArrNumber.push(arrValue)
        let newNumber = newArrNumber.join('')
        display.textContent = newNumber
        displayNumber = Number(newNumber) // store the new number into the variable 'displayNumber'
        console.log('Number on the display: ' + displayNumber);
        operatorAvailable = true
        pointAvailable = false 
    }else if (arrValue == '.' && !pointAvailable) {
        return             
    }else if (arrValue != '.') {
        newArrNumber.push(arrValue)
        let newNumber = newArrNumber.join('')
        display.textContent = newNumber
        displayNumber = Number(newNumber) // store the new number into the variable 'displayNumber'
        console.log('Number on the display: ' + displayNumber);
        operatorAvailable = true
    }
    
}

/// add key board supports (typing a number or '.') and then trigger the populate function to update the display
document.addEventListener('keypress', function (event) {
    let arrDigit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '.']
    for (let i = 0; i < arrDigit.length; i++) {
        if (arrDigit[i] == event.key) {
            console.log( 'Next array value is: ' + event.key);
            populateDisplay(event.key)  
        }   
    }
})


// add event listener  for clicking on a digit ou '.' / ',' and then trigger the populate function to update the display
digitBtn.forEach(element => {
    element.addEventListener('click', e => {
        console.log(e.target.textContent);
        console.log(pointAvailable);
        console.log( 'Next array value is: ' + e.target.textContent);
        populateDisplay(e.target.textContent)
    })
});



//////////////////////////////////////////////////////////////////////////////////////////
//function to manage operation when an operator is set
function operatorTrigged(operatorTrigged) {
    if (firstNum === undefined && operatorAvailable) {
            operator = operatorTrigged
            firstNum = parseFloat(displayNumber)
            console.log('First num: ' + firstNum);
            console.log('Operator is: ' + operator);
            
            newArrNumber = [] //clean the array for the next number typed
            firstNum = display.textContent 
            operatorAvailable = false
            
        }else if (firstNum !== undefined && operatorAvailable){
            nextOperator = operatorTrigged
            secondNum = parseFloat(displayNumber)
            result =  operate(firstNum, operator , secondNum)
            
            console.log('Operator is: ' + operator);
            console.log(`Operation is ${firstNum} ${operator} ${secondNum} = ${result} `);
            console.log('Next operator is: ' + nextOperator);
            
    
            newArrNumber = [] //clean the array for the next number typed
            firstNum = result // so on the next operatbtn click we add a secondNum
            operator = nextOperator
            operatorAvailable = false
            display.textContent = result
        }else if (firstNum !== undefined && !operatorAvailable) {
            operator = operatorTrigged
            console.log( 'New operator set: ' + operator); 
        }
        pointAvailable = true
}


// manage the event every time we CLICK on a operator-btn
const operatorBtn = document.querySelectorAll('.operator-btn')
operatorBtn.forEach(element => {
    element.addEventListener('click', e => {   
        operatorTrigged(e.target.textContent)
    })
});

// manage the event every time we TYPE  on a operator-btn
document.addEventListener('keypress', function (event) {
    let arrDigit = ['+', '-', "*",'x', '/']
    for (let i = 0; i < arrDigit.length; i++) {
        if (arrDigit[i] == event.key) {
            console.log( 'Next array value is: ' + event.key);
            operatorTrigged(event.key)  
        }   
    }
})




//////////////////////////////////////////////////////////////////////////////////////////
// manage the event every time we click on the clear-btn
const clearBtn = document.querySelector('.clear-btn')
clearBtn.addEventListener('click', e => {
    firstNum = undefined
    console.log('FIRSTNum: ' + firstNum);
    secondNum = undefined
    console.log('SECONDNuM: ' + secondNum);
    operator = undefined
    console.log('OPERATOR: ' + operator);
    nextOperator = undefined
    console.log('NextOPERATOR: ' + nextOperator);
    result = undefined
    console.log('RESULT: ' + result);
    operatorAvailable = true
    pointAvailable = true
    display.textContent = 0
    newArrNumber = [] //clean the array for the next number typed
})



//////////////////////////////////////////////////////////////////////////////////////////
function equal() {
    console.log(operatorAvailable);
    
    if (firstNum == undefined) {
        result = displayNumber

    }else if (operatorAvailable){
        secondNum = parseFloat(displayNumber)
        result = operate(firstNum, operator, secondNum)
        console.log(`current opertion is: ${firstNum}${operator}${secondNum} = ${result}`);
        newArrNumber = [] //clean the array for the next number typed
        firstNum = undefined
        operatorAvailable = false
        pointAvailable = true
        return display.textContent = result
    }
}

// manage the event every time we click on the equal-btn
const equalBtn = document.querySelector('.equal-btn')
equalBtn.addEventListener('click', e => { 
    equal()
})

// manage the event every time we PRESS 'ENTER'
document.addEventListener('keypress', function (event) {
    console.log(event.key);
    if (event.key == 'Enter') {
        equal()
    } 
})



//////////////////////////////////////////////////////////////////////////////////////////
// function the handle the backspace purpose
function backspaceTrigged() {
    if (newArrNumber[newArrNumber.length] == '.' ) {
    pointAvailable == true
    }
    newArrNumber.pop()
    let newNumber = newArrNumber.join('')
    display.textContent = newNumber
    displayNumber = Number(newNumber) // store the new number into the variable 'displayNumber'
    console.log('Number on the display: ' + displayNumber);
}


// manage the event every time we click on the backspace-btn
const backspaceBtn = document.querySelector('.backspace-btn')
backspaceBtn.addEventListener('click', e => {
    backspaceTrigged()
})

// manage the event every time we PRESS 'Backspace'
document.addEventListener('keydown', function (event) {
    if (event.code == 'Backspace') {
        backspaceTrigged()
    } 
})


   