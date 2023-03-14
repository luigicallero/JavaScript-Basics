const numbers = [0,1,2,3,4,5,6,7,8,9]
const pets = [
    { name: 'Tomy', age: 15, type: 'dog' },
    { name: 'Tina', age: 6, type: 'cat' },
    { name: 'Mac', age: 55, type: 'dog' },
    { name: 'Rig', age: 10, type: 'dog' }
]
const numbersFiltered = numbers.filter( x => x <5 )
console.log(numbersFiltered)

const petsFiltered = pets.filter( x => x.type == 'cat')
console.log(petsFiltered)

const cats = pets.filter (function (x) {
    return x.type === 'cat'
}) // --> Same as petsFiltered arrow function
console.log (cats)


// Filter method can create an array of the same or less lenght as the original array. Original array will not be modified, it will remain the same. A new array with the elements matching the filter criteria will be created.