document.write("Welcome to My world!! ")

console.log("We are experimenting with JS woooow")

// Declaring variables
var oldVariable // "var" can be used by old version instead of "let"
let myVariable

// Instantiating variables
myVariable = 'Satoshi Nakamoto. '

// Showing the variable value in Screen
document.write(myVariable)

let myColor, myAge
myColor = "green"
document.write("My favorite color is "+ myColor)

// Input
let yourName = prompt("Please insert your Name: ")

console.log(yourName)

// Numbers
let number1 = parseInt(prompt("Insert a number: "))
//number1= parseInt(number1)

let number2 = prompt("Insert a number: ")
number2 =  parseInt(number2)

let result
result = number1 + number2

console.log("Your result is:", result)

document.getElementById("texto").innerHTML = "Content has changed"