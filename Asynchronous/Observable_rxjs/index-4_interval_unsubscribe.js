import { interval } from 'rxjs';
// Observables can be identified with $ symbol at the end of variable name

const counter$ = interval(500);

// creating a reference "counter" that we can then use to unsubscribe
let counter = counter$.subscribe((x)=> { console.log(x)});
setTimeout(()=>{counter.unsubscribe()},5000);
