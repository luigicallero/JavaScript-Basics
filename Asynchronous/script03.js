let el = document.getElementById("response");

const doFirst = () =>{
    setTimeout(() => {
        el.innerHTML = el.innerHTML + `<br/>I was first...`;
    }, 2000);
};
doFirst();
el.innerHTML = el.innerHTML + `<br/>And I am second!!!!`;