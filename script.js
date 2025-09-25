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


const digitNum = document.querySelectorAll('.digit-btn')
const display = document.querySelector('#result')

let displayNumber = 0

function populateDisplay() {
    let newArrNumber = []
    digitNum.forEach(element => {
        element.addEventListener('click', e => {             
            newArrNumber.push(e.target.textContent)
            let newNumber = newArrNumber.join('')
            display.textContent = newNumber
            displayNumber = newNumber // store the new nember into the variable 'displayNumber'
        })
    });
    
}

populateDisplay()

////// check the value of displayNumber
digitNum.forEach(element => {
        element.addEventListener('click', e => {
            console.log( 'this is the displayNumber: ' + displayNumber);
                         
        })
    })
/////



const operatorBtn = document.querySelectorAll('.operator-btn')
operatorBtn.forEach(element => {
    element.addEventListener('click', e => {
        console.log('operator btn clicked');
        
    })
});


const equalBtn = document.querySelector('.equal-btn')
equalBtn.addEventListener('click', e => { console.log('equal btn clicked');
})


