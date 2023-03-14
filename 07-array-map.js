const { pathToFileURL } = require("url")

const numbers = [1, 2, 3, 4, 5]

// multiply 2 times
const multiplied = numbers.map(x => x * 2)
console.log(multiplied) 

// pairs
const paired = numbers.map(x => [x, x])
console.log(paired)

// sum array function
function sum(array){  // const sum = (array) =>  {
    let accumulated = 0;
    for (i = 0; i < array.length; i ++){
        accumulated += array[i];
    }
    return accumulated;
}
console.log(sum(numbers))

// Age average
const pets = [
    { name: 'Tomy', age: 15, type: 'dog' },
    { name: 'Tina', age: 6, type: 'cat' },
    { name: 'Mac', age: 55, type: 'dog' },
    { name: 'Rig', age: 10, type: 'dog' }
]

// ages
const ages = pets.map(x => x.age)
console.log(ages)

// total ages
const sumAges = sum(ages)
console.log(sumAges)

// Average ages
const averageAge = sumAges / ages.length
console.log(averageAge)

// function map allows to create a new array with same length of original array. Map applies the function to each element in the array.