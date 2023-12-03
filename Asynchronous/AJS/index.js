import { Observable } from 'rxjs';
// Observable requires a function () => {}
const observable = new Observable( s => {  
    s.next("Hello");
    s.next("from");
    s.next("SkillSoft");
}); 

observable.subscribe(
    {
        next(data){
            console.log(data);
        }
    }
);
