// Write your function here:
const howOld = (age, year) => {
    const fecha = new Date();
    const currentYear = fecha.getFullYear();
    const yearDifference = year - currentYear;
    newAge = yearDifference + age;
    if (age < newAge) {
        return `You will be ${newAge} in the year ${year}`;
    } else if ((age > newAge) && (newAge > 0)) {
      return `You were ${newAge} in the year ${year}`;
    } else {
      return `The year ${year} was ${-newAge} years before you were born`
    };
  }
  
  
  
  // Once your function is written, write function calls to test your code!
  console.log("Your current age is: "+ 20);
  console.log(howOld(20, 2000))
  console.log(howOld(20, 2024))
  console.log(howOld(20, 2015))