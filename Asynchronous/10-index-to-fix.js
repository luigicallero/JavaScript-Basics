const lcNames = [ "john", "terrence", "lynda" ];

const properName = lcNames => {
    setTimeout(() => {
        let ucName = lcNames.charAt(0).toUpperCase() + lcNames.slice(1);
        return ucName;

    },2000);
}

lcNames.forEach(
   x => console.log(properName(x))
);