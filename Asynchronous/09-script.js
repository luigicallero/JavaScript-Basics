let el = document.getElementById("response");

const showData = async () => {
    try{
        const emp = await fetch(
            "http://localhost:3030/employees",
            {
            method:"POST",
            headers: {
                'Content-type':'application/json',
                },
            body:JSON.stringify({"username":"Jennifer","password":"1234"})
            }); // we are now checking a json that we have generated locally
        const finalData = await emp.json();
        el.innerHTML = finalData.username;
    }catch(err){
        console.log(err);
    }
};