// https://caolan.github.io/async/v3/
import async from 'async';

async.parallel([
    (callback) => {
        setTimeout(() => {
            console.log('A');
            callback(null , 'A is done');
        }, 2000);
    },
    (callback) => {
        setTimeout(() => {
            console.log('B');
            callback(null , 'B is done');
        }, 500);
    },
    (callback) => {
        setTimeout(() => {
            console.log('C');
            callback(null , 'C is done');
        }, 1000);
    }
], (err, results) => {
    console.log(results);
});

/* output:
B
C
A
[ 'A is done', 'B is done', 'C is done' ]
*/