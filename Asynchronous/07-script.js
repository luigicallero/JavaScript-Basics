let el = document.getElementById("response");

async function showData(){
    fetch("https://jsonplaceholder.typicode.com/posts/5")
    .then(data => {
        return data.json();
    })
    .then(post =>{
        console.log(post.title);
        console.log(post.body);
    }).catch(err =>{
        console.log(err.message);
    });
};