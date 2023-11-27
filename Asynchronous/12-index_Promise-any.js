const pf1 = Promise.resolve("pf1 done!!");
const pf2 = Promise.reject("pf2 done!!");
const pf3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "pf3 done!!"); // resolve function to be executed at 0 returning 2022
});

// another method "any" from Promise
Promise
.any([pf1, pf2, pf3]) // first one to resolve is the end of function
.then(data => {
    console.log(data);
})
.catch(err => {
    console.log(err);
})