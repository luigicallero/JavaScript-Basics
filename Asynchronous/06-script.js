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
.then(
    resolve => {
        el.innerHTML = resolve + `<br/>And I am second...`;
    },
    reject => {
        el.innerHTML = "<p style='color:red;'>" + reject + `<br/>Check with Admin!!!`;
    }
)