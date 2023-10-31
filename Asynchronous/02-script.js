let myPromise = new Promise((resolve, reject) => {
    //resolve("Done!");
    reject("Error!");
});

myPromise
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })