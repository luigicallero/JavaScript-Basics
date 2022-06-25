const user = {
  name: "Luis",
  lastname: "Callero",
  age: 42,
  showFullName (){
    return this.name + " " + this.lastname
    // return `${this.name} ${this.lastname}` // another way to write it
  }
}

console.log(user.showFullName())
console.log(user.name + " " + user.lastname)