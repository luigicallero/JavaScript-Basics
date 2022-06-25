const user1 = {
  name: "Luis",
  lastname: "Callero",
  age: 42,
  showFullName (){
    return `${this.name} ${this.lastname}`
  }
}

// constructor
function Person() {
  this.name = ""
  this.lastname = ""
  this.age = 0
  this.showFullName = function() {
    return `${this.name} ${this.lastname}`
  }    
}

const user2 = new Person()
user2.name = "Luis"
user2.lastname = "Callero"
user2.age = 42
console.log(user2.showFullName())

const user3 = new Person()
user3.name = "Wendy"
user3.lastname = "Beloqui"
user3.age = 40
console.log(user3.showFullName())
const user4 = new Person()
const user5 = new Person()

console.log(user2)
console.log(user3)
console.log(user4)
console.log(user5)