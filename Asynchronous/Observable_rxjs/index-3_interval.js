import { interval } from 'rxjs';
// Observables can be identified with $ symbol at the end of variable name

const counter$ = interval(1000);

counter$.subscribe((x)=> { console.log(x)});
