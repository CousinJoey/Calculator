
// Variables that are used repetatively in functions 

operatorToggle = false
integerOne = []
integerTwo = []
operatorArr = []

// adding all elements used to the DOM 

const btns = document.querySelectorAll(".btn")
const displayLower = document.querySelector(".lower-content")
const deletebtn = document.querySelector("#delete")
const operatorBtns = document.querySelectorAll(".btn-op")
const equalBtn = document.querySelector(".btn-eq")
const addBtn = document.querySelector("#add")
const displayUpper = document.querySelector(".upper-content")
const clearBtn = document.querySelector("#clear")
const decimal = document.querySelector(".btn-dec")
const buttonAdd = document.querySelector("#add")

// events associated with buttons on the calculator, runs appropriate function 

equalBtn.addEventListener("click", operateFunc)
clearBtn.addEventListener("click", clearAll)
deletebtn.addEventListener("click", deleteInt)
decimal.addEventListener("click", decimalAdd)


for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", appendNumb)
}

function appendNumb(e) {
   number = (e.target.id)
   if ((operatorToggle == false) && (integerOne.length < 11)) {
    integerOne.push(number)
    displayLower.textContent = integerOne.join("")
   } else if ((operatorToggle == true) && (integerTwo.length < 11)) {
    integerTwo.push(number)
    displayLower.textContent = integerTwo.join("")
   }
}

for (let i = 0; i < operatorBtns.length; i++) {
    operatorBtns[i].addEventListener("click", operatorToggleFunc)
    operatorBtns[i].addEventListener("click", storeOp)
}

// main function for letting two operator actions call an operation
// for example, hitting + while + is already stored in an operator will cause it just to give the sum of the two integers

function storeOp(e) {
    let operator = (e.target.id)
        if ((integerTwo.length == 0)) {
            operatorArr.pop()
            operatorArr.push(operator) 
        } else if ((integerTwo.length > 0)) {
            operateFunc(operatorArr[0])
            operatorArr.pop()
            operatorArr.push(operator)
            displayUpper.textContent = (integerOne.join("") + e.target.id)
        } else if (operatorArr.length > 2) {
            operatorArr.slice(0,2)
        }
}

function operatorToggleFunc(e) {
    operatorToggle = true
    displayUpper.textContent = (integerOne.join("") + e.target.id)
}

// main function for computing operations, takes in values and calls appropriate function //


function operateFunc() {
    displayUpper.textContent = ""
    if ((operatorArr.includes("+") && (integerTwo.length > 0))) {
        addFunc(parseFloat(integerOne.join("")), parseFloat(integerTwo.join("")))
        displayUpper.textContent = (integerOne.join("") + "+")
    } else if ((operatorArr.includes("x") && (integerTwo.length > 0))) {
        multiplyFunc(parseFloat(integerOne.join("")), parseFloat(integerTwo.join("")))
        displayUpper.textContent = (integerOne.join("") + "x")
    } else if ((operatorArr.includes("/") && (integerTwo.length > 0))) {
        divideFunc(parseFloat(integerOne.join("")), parseFloat(integerTwo.join("")))
        displayUpper.textContent = (integerOne.join("") + "/")
    } else if ((operatorArr.includes("-") && (integerTwo.length > 0))) {
        subtractFunc(parseFloat(integerOne.join("")), parseFloat(integerTwo.join("")))
        displayUpper.textContent = (integerOne.join("") + "-")
    }
}


function subtractFunc(x,y) {
    integerOne.splice(0, integerOne.length)
    integerOne.push(Math.round((x-y) * 1000) / 1000)
    integerTwo.splice(0, integerTwo.length)
    displayLower.textContent = integerOne
}

function addFunc(x,y) {
    integerOne.splice(0, integerOne.length)
    integerOne.push(Math.round((x+y) * 1000) / 1000)
    integerTwo.splice(0, integerTwo.length)
    displayLower.textContent = integerOne
}

function multiplyFunc(x,y) {
    integerOne.splice(0, integerOne.length)
    integerOne.push(Math.round((x*y) * 1000) / 1000)
    integerTwo.splice(0, integerTwo.length)
    displayLower.textContent = integerOne
}

function divideFunc(x,y) {
    if (y == 0) {
        displayLower.textContent = "Cannot divide by Zero"
        integerTwo.splice(0, integerTwo.length)
    } else {
        integerOne.splice(0, integerOne.length)
        integerOne.push(Math.round((x/y) * 1000) / 1000)
        integerTwo.splice(0, integerTwo.length)
        displayLower.textContent = integerOne
    }
}

function clearAll() {
    operatorToggle = false
    integerOne = []
    integerTwo = []
    operatorArr = []
    displayLower.textContent = ""
    displayUpper.textContent = ""
}

function deleteInt() {
    if (operatorToggle == false) {
        integerOne.pop()
        displayLower.textContent = integerOne.join("")
    } else if (operatorToggle == true) {
        integerTwo.pop()
        displayLower.textContent = integerTwo.join("")
    }
} 

function decimalAdd (e) {
    if ((operatorToggle == false) && (!integerOne.includes("."))) {
        integerOne.push(e.target.id)
        displayLower.textContent = integerOne.join("")
    } else if ((operatorToggle == true) && (!integerTwo.includes("."))) {
        integerTwo.push(e.target.id)
        displayLower.textContent = integerTwo.join("")
    }
}

// adds keyboard functionality, needed to use e.key to get element ID since that was the type of object used to initially
// input the numbers into the integer arrays

window.addEventListener("keydown", keyboardFunc)

function keyboardFunc(e) {
    e.preventDefault();
    if (e.key === "0") document.getElementById("0").click()
    if (e.key === "1") document.getElementById("1").click()
    if (e.key === "2") document.getElementById("2").click()
    if (e.key === "3") document.getElementById("3").click()
    if (e.key === "4") document.getElementById("4").click()
    if (e.key === "5") document.getElementById("5").click()
    if (e.key === "6") document.getElementById("6").click()
    if (e.key === "7") document.getElementById("7").click()
    if (e.key === "8") document.getElementById("8").click()
    if (e.key === "9") document.getElementById("9").click()
    if (e.key === "Enter") document.getElementById("equals").click()
    if (e.key === "+") document.getElementById("+").click()
    if (e.key === "*") document.getElementById("x").click()
    if (e.key === "/") document.getElementById("/").click()
    if (e.key === "-") document.getElementById("-").click()
    if (e.key === ".") document.getElementById(".").click()
    if (e.key === "Backspace") document.getElementById("delete").click()
    if (e.key === "Escape") document.getElementById("clear").click()
}
