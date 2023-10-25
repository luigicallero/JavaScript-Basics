let el = document.getElementById("response");
function A(){
    console.log("A")
};

// execute the function embeded after xxx miliseconds
// this is a way to simulate a async function. This way function C is on hold until B is completed
function B(callback){
    setTimeout(() =>{ 
        console.log("B");
        callback();
    }, 2000) 
};
function C(){
    console.log("C")
};


A();
B(C);
//C();