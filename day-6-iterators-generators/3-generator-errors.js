/*
An error thrown inside of a generator will propagate up, killing
the current run-through.
 ---------------
 */

function* ErrorGen() {
    yield 1;
    yield 2;

    throw new Error('Throwing an ERROR');

    yield 3;
    yield 4;
    yield 5;
}

const errGen = ErrorGen();
let next = errGen.next();

while(!next.done) {
    console.log(next.value);
    next = errGen.next();
}



/*
At any point in which you might run the risk of throwing an
error, you might considering wrapping the `next()` call in
a try/catch, so that you can handle errors accordingly.
 ---------------
 */

//function* ErrorGen() {
//    yield 1;
//    yield 2;
//
//    throw new Error('Throwing an ERROR');
//
//    yield 3;
//    yield 4;
//    yield 5;
//}
//
//const errGen = ErrorGen();
//let next = errGen.next();
//
//while(!next.done) {
//    try {
//        console.log(next);
//        console.log(next.value);
//        next = errGen.next();
//    } catch(e) {
//        console.log(`And the error is: ${e}`);
//    }
//}