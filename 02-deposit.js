const myAccount = {
  bank: "NZ",
  type: "Premium",
  total: 1400,

  withdraw(amount) {
    console.log("before you withdraw: " + this.total),
    this.total = this.total - amount,
    console.log("current amount: " + this.total)
  },

  deposit(amountToDeposit) {
    console.log("before you deposit: " + this.total),
    this.total = this.total + amountToDeposit,
    console.log("current amount: " + this.total)
  }
};

myAccount.deposit(1000)
myAccount.deposit(1000)
myAccount.withdraw(500)
myAccount.withdraw(500)
console.log(myAccount)

// here we have learned properties and methods (funcions inside of an object)

// this is also a method ;)
variable = "hello world".toUpperCase()
console.log(variable)