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

console.log(operate(firstNum, operator, secondtNum));

