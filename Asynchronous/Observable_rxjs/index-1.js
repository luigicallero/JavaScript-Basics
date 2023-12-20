import { Observable } from 'rxjs';
// Observable requires a function () => {}
const observable = new Observable( s => {  
    setTimeout(() => s.next("Hello"),1000);
    setTimeout(() => s.next("from"),2000);
    setTimeout(() => s.next("Skillsoft"),3000);
    //s.error("Oops");
    setTimeout(() => s.complete(),4000);
}); 

// observable.subscribe(
//     {
//         next(data){
//             console.log(data);
//         }
//     }

// Other Option to do it:
// Observer:
const observer = {
    next : data =>{
        console.log(data);
    },
    complete : () =>{
        console.log ("task completed");
    },
    error : err =>{
        console.log (err);
    }
}
// Subscription:
observable.subscribe(observer);
