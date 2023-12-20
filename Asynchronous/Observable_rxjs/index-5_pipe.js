import { of, map } from 'rxjs';
let sentence = [];
// Observables 
const observable = new of(
    "Hello ",
    "from ",
    "Skillsoft"
);

observable
.pipe(
    map(x => {
        return x.toUpperCase();
    })
)
.subscribe({
    next(data){
        sentence.push(data);
    },
    error(err){
        console.log(err);
    },
    complete(){
        console.log("all done");    
    }
});

console.log(sentence);
