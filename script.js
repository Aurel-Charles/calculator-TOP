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
        case '/':
            if (secondNum == 0) {
                return "ERROR"
            }else{
                return roundResult((Number(firstNum) / Number(secondNum)))
            }
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
            console.log(e.target.textContent);
            console.log(pointAvailable);
            
            if (e.target.textContent == '.' && pointAvailable) {
                newArrNumber.push(e.target.textContent)
                let newNumber = newArrNumber.join('')
                display.textContent = newNumber
                displayNumber = Number(newNumber) // store the new number into the variable 'displayNumber'
                console.log('Number on the display: ' + displayNumber);
                operatorAvailable = true
                pointAvailable = false 
            }else if (e.target.textContent == '.' && !pointAvailable) {
                return             
            }else if (e.target.textContent != '.') {
                newArrNumber.push(e.target.textContent)
                let newNumber = newArrNumber.join('')
                display.textContent = newNumber
                displayNumber = Number(newNumber) // store the new number into the variable 'displayNumber'
                console.log('Number on the display: ' + displayNumber);
                operatorAvailable = true
            }

            
        })
    });
    
}

populateDisplay()





// ////// check the value of displayNumber each time a btn number is pressed ONLY FOR THE CONSOLE
// digitNum.forEach(element => {
//         element.addEventListener('click', e => {
//             console.log( 'DisplayNumber to become the stored: ' + displayNumber);                         
//         })
//     })
// /////




// manage the event every time we click on a operator-btn
const operatorBtn = document.querySelectorAll('.operator-btn')
operatorBtn.forEach(element => {
    element.addEventListener('click', e => {   
        if (firstNum === undefined && operatorAvailable) {
            operator = e.target.textContent
            firstNum = parseFloat(displayNumber)
            console.log('First num: ' + firstNum);
            console.log('Operator is: ' + operator);
            
            newArrNumber = [] //clean the array for the next number typed
            firstNum = display.textContent 
            operatorAvailable = false
            
        }else if (firstNum !== undefined && operatorAvailable){
            nextOperator = e.target.textContent
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
            operator = e.target.textContent
            console.log( 'New operator set: ' + operator); 
        }
        pointAvailable = true
    })

});


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




// manage the event every time we click on the equal-btn
const equalBtn = document.querySelector('.equal-btn')
equalBtn.addEventListener('click', e => { 
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
})



// manage the event every time we click on the backspace-btn
const backspaceBtn = document.querySelector('.backspace-btn')
backspaceBtn.addEventListener('click', e => {
    if (newArrNumber[newArrNumber.length] == '.' ) {
        pointAvailable == true
    }
    newArrNumber.pop()
    let newNumber = newArrNumber.join('')
    display.textContent = newNumber
    displayNumber = Number(newNumber) // store the new number into the variable 'displayNumber'
    console.log('Number on the display: ' + displayNumber);

    
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





