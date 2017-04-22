/*
A generator can delegate functionality to another
generator.  In doing so, all calls to `next()` will
be passed to the delegate, and won't return to the
main generator until the delegate has finished running
 ---------------
 */

function *innerGenerator() {
    yield 3;
    yield 4;
}

function *generator() {
    yield 1;
    yield 2;
    yield* innerGenerator();
    yield 5;
    return 6;
}

const gen = generator();
let done = false;

while(!done) {
    let next = gen.next();
    done = next.done;
    console.log(next.value);
}



/*
In the case of a delegate generator, while we can interact with its
yield statements the same way we would expect based on previous
examples, the only way for a delegate to pass data back to the main
generator is with a returned value.
 ---------------
 */

//function *innerIncrementGenerator(x) {
//    x++;
//    console.log(`First inner increment to x, x is ${x}`);
//    yield x;
//    x++;
//    console.log(`Second inner increment to x, x is ${x}`);
//    yield x;
//    console.log(`Returning x to the main generator, x is ${x}`);
//    return x;
//}
//
//function *incrementGenerator(x) {
//    console.log(`Starting the main generator, x is ${x}`);
//    console.log(`Entering the delegated inner generator`);
//    x = yield* innerIncrementGenerator(x);
//    console.log(`Back in the main generator, x is ${x}`);
//    x++;
//    console.log(`Ran main increment to x, x is ${x}`);
//    yield x;
//}
//
//const incGen = incrementGenerator(0);
//let incDone = false;
//
//while(!incDone) {
//    let next = incGen.next(100);
//    incDone = next.done;
//}
