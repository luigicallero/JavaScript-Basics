let el = document.getElementById("response");

const doFirst = () =>{
    return new Promise((resolve, reject) => {
    //const promiseFunction = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(`<br/>I was first...`);
        }, 2000);    
    });
    //return promiseFunction; 
};

async function showMessages(){
    let firstMessage = await doFirst();
    el.innerHTML = firstMessage + `<br/>I was first...`;
}

showMessages();