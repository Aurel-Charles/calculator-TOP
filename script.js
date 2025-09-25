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


// calculator operation  num1 + operator + num2
// return the resul

let firstNum = 15
let secondtNum = 5
let operator = '*'


function operate(firstNum, operator, secondtNum) {
    switch (operator) {
        case '+':
            return (firstNum + secondtNum)
            break;
        case '-':
            return (firstNum - secondtNum)
            break;
        case '*':
            return (firstNum * secondtNum)
            break;
        case '/':
            return (firstNum / secondtNum)
            break;
    }


}





// functions that populate the display


const num = document.querySelectorAll('.digit-btn')
const display = document.querySelector('#result')

let displayNumber = 0

function populateDisplay() {
    let newArrNumber = []
    num.forEach(element => {
        element.addEventListener('click', e => {             
            newArrNumber.push(e.target.textContent)
            let newNumber = newArrNumber.join('')
            display.textContent = newNumber
            displayNumber = newNumber // store the new nember into the variable 'displayNumber'
        })
    });
    
}

populateDisplay()


num.forEach(element => {
        element.addEventListener('click', e => {
            console.log( 'this is the displayNumber: ' + displayNumber);
                         
        })
    })

