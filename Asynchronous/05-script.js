let el = document.getElementById("response");

const doFirst = () =>{
    return new Promise((resolve, reject) => {
    //const promiseFunction = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(`<br/>I was first...`); // commented to test handling errors
            //reject(`<br/>Error!!!!...`); // to test handling errors
        }, 2000);    
    });
    //return promiseFunction; 
};

doFirst()
.then(data => {
    el.innerHTML = firstMessage + data + `<br/>And I am second...`;
})
.catch(err =>{
    el.innerHTML = firstMessage + err + `<br/>Check with Admin!!!`;
});
