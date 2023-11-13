// const pf1 = new Promise((resolve, reject)=>{
//     resolve("here is the data");
// })

const pf1 = Promise.resolve("pf1 done!!");
pf1.then(data => console.log(data));
const pf2 = Promise.resolve("pf2 done!!");
pf2.then(data => console.log(data));
const pf3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 0, 2022); // resolve function to be executed at 0 returning 2022
});

// another method "all" from Promise
Promise
.all([pf1, pf2, pf3])
.then(data => {
    console.log(data);
})