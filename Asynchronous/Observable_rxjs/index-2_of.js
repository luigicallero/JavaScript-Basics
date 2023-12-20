import { of } from 'rxjs';
// Observable created with "of"
const greeting = of( "Hello ","from ","Skillsoft");

// Subscription:
greeting.subscribe((x) => {
    console.log(x);
});

// other way to print it
let greet = "";
greeting.subscribe((x) => {
    greet += x;
})
console.log(greet);
