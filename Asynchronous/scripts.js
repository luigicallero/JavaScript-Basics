let el = document.getElementById("response");
function A(){
    console.log("A")
};

// execute the function embeded after xxx miliseconds
function B(callback){
    setTimeout(() =>{ 
        console.log("B");
        callback(); // this is a way to execute an async function. This way function C is on hold until B is completed
    }, 2000) 
};
function C(){
    console.log("C")
};


A();
B(C);
//C();