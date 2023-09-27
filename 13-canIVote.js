const canIVote = (age) => {
    age >= 18 ? value=true : value=false;
    return(value)
  };
  
  // Uncomment the line below when you're ready to try out your function
  console.log("Tengo 19 puedo votar?:",canIVote(19)); // Should print true
  
  // We encourage you to add more function calls of your own to test your code!
  console.log("Puede votar con 16 años?:",canIVote(16));
  console.log("Puede votar con 18 años?:",canIVote(18));


// Write your function here:
const agreeOrDisagree = (string1,string2) => {
    string1 == string2 ? value="You agree!":value="You disagree!";
    return(value);
  }
  
  // Uncomment the line below when you're ready to try out your function
   console.log(agreeOrDisagree("yep", "yep")) 
   // Should print 'You agree!'
  
  // We encourage you to add more function call of your own to test your code!
  console.log(agreeOrDisagree("yep", "nop")) 




  // Write your function here:
const lifePhase = (age) => {
  if (age <= 0 || age > 140 ) {
    return 'This is not a valid age'}
  else if ( age < 4) {
    return 'baby'}
  else if ( age < 13) {
    return 'child'}
  else if ( age < 20) {
    return 'teen'}
  else if ( age < 65) {
    return 'adult'}
  else if ( age <= 140) {
    return 'senior'}
};
/*0-3 should return 'baby'
4-12 should return 'child'
13-19 should return 'teen'
20-64 should return 'adult'
65-140 should return 'senior citizen'
If the number is less than 0 or greater than 140, the program should return 'This is not a valid age'
*/


// Uncomment the line below when you're ready to try out your function
console.log(lifePhase(5)) //should print 'child'

// We encourage you to add more function calls of your own to test your code!
console.log(lifePhase(0)) //should print 'crazy'
console.log(lifePhase(3)) //should print 'baby'
console.log(lifePhase(6)) //should print 'child'
console.log(lifePhase(14)) //should print 'teen'
console.log(lifePhase(21)) //should print 'adult'
console.log(lifePhase(66)) //should print 'senior'



// Write your function here:
const finalGrade = (grade1, grade2, grade3) => {
  if (
    grade1 < 0 ||
    grade1 > 100 ||
    grade2 < 0 ||
    grade2 > 100 ||
    grade3 < 0 ||
    grade3 > 100
  ) {
    return "You have entered an invalid grade.";
  }
  let average = (grade1 + grade2 + grade3) / 3;
  if (average < 60) {
    return "F";
  } else if (average < 70) {
    return "D";
  } else if (average < 80) {
    return "C";
  } else if (average < 90) {
    return "B";
  } else if (average <= 100) {
    return "A";
  }
};

// Uncomment the line below when you're ready to try out your function
  console.log(finalGrade(100, 92, 95)) // Should print 'A'

// We encourage you to add more function calls of your own to test your code!
  console.log(finalGrade(80, 80, 95)) // Should print 'B' 
  console.log(finalGrade(70, 70, 95)) // Should print 'C'
  console.log(finalGrade(60, 60, 65)) // Should print 'D'
  console.log(finalGrade(30, 30, 95)) // Should print 'F'

  console.log(finalGrade(-1, 92, 3)) // Should print 'You have entered an invalid grade.'
  console.log(finalGrade(101, 92, 3)) // Should print 'You have entered an invalid grade.'
  console.log(finalGrade(99, -1, 3)) // Should print 'You have entered an invalid grade.'
  console.log(finalGrade(99, 101, 3)) // Should print 'You have entered an invalid grade.'
  console.log(finalGrade(99, 92, -1)) // Should print 'You have entered an invalid grade.'
  console.log(finalGrade(99, 92, 101)) // Should print 'You have entered an invalid grade.'