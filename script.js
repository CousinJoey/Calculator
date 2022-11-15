
finalArr = []
initalArr = [0]
operatorToggle = false
integerOne = []
integerTwo = []
operatorArr = []

const btns = document.querySelectorAll(".btn")
const displayUpdate = document.querySelector(".lower-content")
const deletebtn = document.querySelector("#delete")
const operatorBtns = document.querySelectorAll(".btn-op")
const equalBtn = document.querySelector(".btn-eq")
const addBtn = document.querySelector("#add")
const displayUpper = document.querySelector(".upper-content")

for (let i = 0; i < operatorBtns.length; i++) {
    operatorBtns[i].addEventListener("click", allOpsFunc)
    operatorBtns[i].addEventListener("click", storeOp)
    /*operatorBtns[i].addEventListener('click', checkFunc)*/
}

function storeOp(e) {
    let operator = e.target.id
        if (operatorArr.length < 1) {
            operatorArr.push(operator) 
        } else if (operatorArr.length > 0) {
            operatorArr.pop()
            operatorArr.push(operator)
        }
    console.log(operatorArr)
}

function allOpsFunc(e) {
    operatorToggle = true
    integerTwo.splice(0, integerTwo.length)
    displayUpper.textContent = (integerOne.join("") + e.target.id)
    displayUpdate.textContent = 0
}

/*function checkFunc() {
    if (operatorArr.includes(""))
}*/


equalBtn.addEventListener("click", operateFunc)

function operateFunc() {
    displayUpper.textContent = ""
    if (operatorArr.includes("+")) {
        operatorArr.pop()
        addFunc(parseFloat(integerOne.join("")), parseFloat(integerTwo.join("")))
    } else if (operatorArr.includes("x")) {
        operatorArr.pop()
        multiplyFunc(parseFloat(integerOne.join("")), parseFloat(integerTwo.join("")))
    } else if (operatorArr.includes("/")) {
        operatorArr.pop()
        divideFunc(parseFloat(integerOne.join("")), parseFloat(integerTwo.join("")))
    } else if (operatorArr.includes("-")) {
        operatorArr.pop()
        subtractFunc(parseFloat(integerOne.join("")), parseFloat(integerTwo.join("")))
    }
}

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", getID)
}

const buttonAdd = document.querySelector("#add")

displayUpdate.textContent = initalArr

function getID(e) {
   number = (e.target.id)
   if (operatorToggle == false) {
    integerOne.push(number)
    displayUpdate.textContent = integerOne.join("")
   } else if (operatorToggle == true) {
    integerTwo.push(number)
    displayUpdate.textContent = integerTwo.join("")
   }
}

function subtractFunc(x,y) {
    integerOne.splice(0, integerOne.length)
    integerOne.push(x-y)
    integerTwo.splice(0, integerTwo.length)
    displayUpdate.textContent = integerOne
}

function addFunc(x,y) {
    integerOne.splice(0, integerOne.length)
    integerOne.push(x+y)
    integerTwo.splice(0, integerTwo.length)
    displayUpdate.textContent = integerOne
}

function multiplyFunc(x,y) {
    integerOne.splice(0, integerOne.length)
    integerOne.push(x*y)
    integerTwo.splice(0, integerTwo.length)
    displayUpdate.textContent = integerOne
}

function divideFunc(x,y) {
    if (y == 0) {
        displayUpdate.textContent = "Cannot divide by Zero"
        integerTwo.splice(0, integerTwo.length)
    } else {
        integerOne.splice(0, integerOne.length)
        integerOne.push(x/y)
        integerTwo.splice(0, integerTwo.length)
        displayUpdate.textContent = integerOne
    }
}
