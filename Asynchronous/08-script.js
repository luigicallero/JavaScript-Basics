let el = document.getElementById("response");

const showData = async () => {
    try{
        const data = await fetch("https://jsonplaceholder.typicode.com/posts/5");
        const dataJson = await data.json();
        el.innerHTML = dataJson.body;
    }catch(err){
        console.log(err);
        log
    }
};