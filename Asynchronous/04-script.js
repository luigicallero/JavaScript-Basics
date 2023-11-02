let el = document.getElementById("response");

const doFirst = () =>{
    return new Promise((resolve, reject) => {
    //const promiseFunction = new Promise((resolve, reject) =>{
        setTimeout(() => {
            //resolve(`<br/>I was first...`); // commented to test handling errors
            reject(`<br/>Error!!!!...`); // to test handling errors
        }, 2000);    
    });
    //return promiseFunction; 
};

async function showMessages(){
    try{
        let firstMessage = await doFirst();
        el.innerHTML = firstMessage + `<br/>And I am second...`;
    } catch(err){
        el.innerHTML = `<br/>Oops...${err}`;
    }
}

showMessages();