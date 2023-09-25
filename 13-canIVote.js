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