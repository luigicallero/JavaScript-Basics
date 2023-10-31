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

doFirst()
.then((data) =>{
    el.innerHTML = el.innerHTML + data + `<br/>And I am second!!!!`;
});