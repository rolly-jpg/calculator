let firstNum, secondNum, op
firstNum, secondNum = null
op = ''

function add (a, b) {
    console.log(a,b, 'ab')
    return a+b
}

function subtract (a, b) {
    return a-b
}

function multiply (a, b) {
    return a*b
}

function divide (a, b) {
    return a/b
}

function operate() {
    let ret = 0
    switch (op) {
        case '+':
            ret = add(firstNum,secondNum)
            break;
        case '-':
            ret = subtract(firstNum,secondNum)
            break;
        case '*':
            ret = multiply(firstNum,secondNum)
            break;
        case '/':
            ret = secondNum === 0 ? 'divided by 0' : divide(firstNum,secondNum)
            break;
    }
    return ret
}

let buffer = ''

const btn = document.querySelectorAll('.btn')
btn.forEach(btn => btn.addEventListener('click', processButtons))



function processButtons() {
    console.log(this.textContent)
    const display = document.querySelector('.display')
    display.setAttribute('value', display.getAttribute('value') + this.textContent)

    if (this.classList.contains('num')) {
        buffer += this.textContent
    }
    else if (this.classList.contains('op')) {
        if (op) {
            secondNum = +buffer;
            buffer = '';
            firstNum = operate();
            display.setAttribute('value', firstNum + this.textContent)
            op = this.textContent;
        } else {
            firstNum = +buffer
            buffer = ''
            op = this.textContent
        }
    }
    else if (this.textContent === '=') {
        secondNum = +buffer
        let result = operate()
        display.setAttribute('value', result)
        buffer = result
        op = ''
    }
}