const countVowels = (word) =>{
    //let wordLowerCase = word.toLowerCase()
    let vowels = word.match(/[a,e,i,o,u]/gi).length
    return vowels
}

console.log(countVowels("HellooooO"))