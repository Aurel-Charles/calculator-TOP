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


// calculator operation  digitNum1 + operator + digitNum2
// return the resul

let firstNum 
let secondNum = 0
let operator = ''
let nextOperator = ''
let result
let operatorClickCheck = false


function operate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+':
            return (firstNum + secondNum)
            break;
        case '-':
            return (firstNum - secondNum)
            break;
        case '*':
            return (firstNum * secondNum)
            break;
        case '/':
            return (firstNum / secondNum)
            break;
    }


}





// functions that populate the display


const digitNum = document.querySelectorAll('.digit-btn')
const display = document.querySelector('#result')

let displayNumber = 0
let newArrNumber = [] // array to concatenate each number pushed in it

function populateDisplay() {
    digitNum.forEach(element => {
        element.addEventListener('click', e => {             
            newArrNumber.push(e.target.textContent)
            let newNumber = newArrNumber.join('')
            display.textContent = newNumber
            displayNumber = newNumber // store the new nember into the variable 'displayNumber'
            operatorClickCheck = false
        })
    });
    
}

populateDisplay()

////// check the value of displayNumber each time a btn number is pressed
digitNum.forEach(element => {
        element.addEventListener('click', e => {
            console.log( 'DisplayNumber: ' + displayNumber);
            console.log( 'FirstNum: ' + firstNum);
                         
        })
    })
/////



const operatorBtn = document.querySelectorAll('.operator-btn')
operatorBtn.forEach(element => {
    element.addEventListener('click', e => {

        if (firstNum === undefined && !operatorClickCheck) {
            firstNum = parseFloat(displayNumber)
            console.log('First num: ' + firstNum);
            if (e.target.textContent == 'x') {
                operator = '*'
            }else{
                operator = e.target.textContent  // define the first operator
            }
            console.log('Operator is: ' + operator);
            
            newArrNumber = [] //clean the array for the next number typed
            display.textContent = firstNum
            operatorClickCheck = true
            
        }else if (firstNum !== undefined && !operatorClickCheck){
            secondNum = parseFloat(displayNumber) // asume first num is 0 so the number typed at first is actualy the secondNum
            if (e.target.textContent == 'x') {
                nextOperator = '*'
            }else{
                nextOperator = e.target.textContent
            }
            result =  operate(firstNum, operator , secondNum)
            console.log(operator);
            
            console.log(`Operation is ${firstNum} ${operator} ${secondNum} = ${result} `);
    
            newArrNumber = [] //clean the array for the next number typed
            firstNum = result // so on the next operatbtn click we add a secondNum
            operator = nextOperator
            operatorClickCheck = true
            display.textContent = result
            


        }        
    })

});



const clearBtn = document.querySelector('.clear-btn')
clearBtn.addEventListener('click', e => {
    firstNum = undefined
    console.log('FIRSTNum: ' + firstNum);
    secondNum = undefined
    console.log('SECONDNuM: ' + secondNum);
    operator = ''
    console.log('OPERATOR: ' + operator);
    nextOperator = ''
    console.log('NextOPERATOR: ' + nextOperator);
    result = undefined
    console.log('RESULT: ' + result);
    display.textContent = 0
    newArrNumber = [] //clean the array for the next number typed
})





const equalBtn = document.querySelector('.equal-btn')
equalBtn.addEventListener('click', e => { 
    if (firstNum == undefined) {
        firstNum == displayNumber
    }else if (!operatorClickCheck){
        secondNum = parseFloat(displayNumber)
        result = operate(firstNum, operator, secondNum)
        console.log(`current opertion is: ${firstNum}${operator}${secondNum} = ${result}`);
        newArrNumber = [] //clean the array for the next number typed
        firstNum = undefined
        operatorClickCheck = true
        return display.textContent = result
    }
})










// entre un numero 
    //s'affiche sur le display
    // devien second Number
// click operator
    // first number 0 , 
    // store store seconde = display number
    // operate avec zero 
    // result => first number 
// entre second numero
// click operator  resultat du premier calcul ,
// entre un nouveau numero





