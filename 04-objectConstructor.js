// Object Constructor
const person = new Object()
console.log(person)

// Same than typing
const person2 = {}
console.log(person2)

// To confirm both are the same thing
console.log(person2.constructor === Object)

const calculation = new Object( 2 * 6 )
console.log(calculation)

const greeting = new Object("what's up!!")
console.log(greeting)

// adding properties and methods to an object
const friendlyGreeting = new Object("what's up!!")
friendlyGreeting.name = "Special Greeeting"
friendlyGreeting.friend = function (){
  return this + " my Friend!!"
}
console.log(friendlyGreeting.name)
console.log(friendlyGreeting.friend())

// Creating an object and showing keys and values
const user = {
  name: "",
  lastname: "",
  age: 40,
  showName (){
    return this.name
  }
}

console.log(Object.keys(user))
console.log(Object.values(user))