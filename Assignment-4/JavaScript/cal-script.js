//all the functions for the calculator to work
class Calculator {
    constructor(previousInputTextElement, currentInputTextElement){
        this.previousInputTextElement = previousInputTextElement
        this.currentInputTextElement = currentInputTextElement
        this.clear()
    }

    //clears the display of the calculator
    clear(){
        this.currentInput = ''
        this.previousInput = ''
        this.operation = undefined
    }

    //deletes a single number from the current display
    delete(){
        this.currentInput = this.currentInput.toString().slice(0, -1)
    }

    //the function to append the numbers on the display
    appendNumber(number){
        if (number === '.' && this.currentInput.includes('.')) return
        this.currentInput = this.currentInput.toString() + number.toString()
    }

    /*the function to add a operation & calculate multiple calculations 
    in the previous display*/
    chooseOperation(operation){
        if (this.currentInput === '') return
        if(this.previousInput !== ''){
            this.compute()
        }
        this.operation = operation
        this.previousInput = this.currentInput
        this.currentInput = ''
    }

    //the function to make the calculations on the calculator
    compute(){
        let computation
        const prev = parseFloat(this.previousInput)
        const current = parseFloat(this.currentInput)
        if (isNaN(prev) || isNaN(current)) return
        switch(this.operation){
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '/':
                computation = prev / current
                break
            case '*':
                computation = prev * current
                break
            default:
                return
        }
        this.currentInput = computation
        this.operation = undefined
        this.previousInput = ''
    }

    //updates the display of the calculator
    updateDisplay(){
        this.currentInputTextElement.innerHTML = this.currentInput
        /*this if statement was causing an error on the calculator
        so I commented it out
        if (this.operation != null){
            this.previousInputTextElement.innerHTML = 
            `${this.previousInput} ${this.operation}`
        }*/
        this.previousInputTextElement.innerHTML = this.previousInput
    }
}

//all the veriables used on the calculator called from the HTML
const numberButtons = document.querySelectorAll('#number')
const operationButtons = document.querySelectorAll('#operation')
const equalsButton = document.querySelector('#equals')
const deleteButton = document.querySelector('#delete')
const allClearButton = document.querySelector('#allClear')
const previousInputTextElement = document.querySelector('#previousInput')
const currentInputTextElement = document.querySelector('#currentInput')

const calculator = new Calculator(previousInputTextElement, currentInputTextElement)

//calling the numbers from the HTML buttons
numberButtons.forEach(button => {
    button.addEventListener('click',  () => {
        calculator.appendNumber(button.innerHTML)
        calculator.updateDisplay()
    })
})

//the function to input numbers from the keyboard
document.addEventListener('keydown', (event) => {
    if(
        event.key == "1"||
        event.key == "2"||
        event.key == "3"||
        event.key == "4"||
        event.key == "5"||
        event.key == "6"||
        event.key == "7"||
        event.key == "8"||
        event.key == "9"||
        event.key == "0"||
        event.key == "."){
        currentInputTextElement.value += event.key;
        calculator.appendNumber(event.key)
    }
    if(
        event.key == "-"||
        event.key == "+"||
        event.key == "*"||
        event.key == "/"||
        event.key == "="){
        operationButtons.value += event.key;
        calculator.chooseOperation(event.key)
    }
    calculator.updateDisplay()
})

//calling the operations from the HTML buttons
operationButtons.forEach(button => {
    button.addEventListener('click',  () => {
        calculator.chooseOperation(button.innerHTML)
        calculator.updateDisplay()
    })
})

//the click function to invoke the equals function
equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

//the click function to invoke the clear all function
allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

//the click function to invoke the delete function
deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})