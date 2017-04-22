/*
In this example, we'll create a generator, which is an
iterable data type in itself.  Once we instantiate it,
we can call `next()` on it directly.  Each time we call
`next()`, we'll move onto the next `yield` statement.

In this example, I list them out explicitly simply to
demonstrate the iterator protocol.  After this example,
I'll only use while-loops.
 ---------------
 */

function* Mario() {
    yield 'Mario';
    yield 'Luigi';
    yield 'Toad';
    yield 'Peach';
}

const generateMario = Mario();

const firstRun = generateMario.next();
console.log(`First run: ${JSON.stringify(firstRun)}
`);
const secondRun = generateMario.next();
console.log(`Second run: ${JSON.stringify(secondRun)}
`);
const thirdRun = generateMario.next();
console.log(`Third run: ${JSON.stringify(thirdRun)}
`);
const fourthRun = generateMario.next();
console.log(`Fourth run: ${JSON.stringify(fourthRun)}
`);
const fifthRun = generateMario.next();
console.log(`Fifth run: ${JSON.stringify(fifthRun)}
`);
const sixthRun = generateMario.next();
console.log(`Sixth run: ${JSON.stringify(sixthRun)}
`);



/*
If you're only interested in the values, you can certainly
user a for...of loop.  However, as you'll see in future
examples, this means you'll lose access to some core functionality
that makes a generator so unique.
 ---------------
 */

//function* Mario() {
//    yield 'Mario';
//    yield 'Luigi';
//    yield 'Toad';
//    yield 'Peach';
//}
//
//for(let val of Mario()) {
//    console.log(`Character: ${val}`);
//}



/*
A generator can also include a return value, which will
be the value passed back as the final value in the
generator, when `done: true`
 ---------------
 */

//function* Mario() {
//    yield 'Mario';
//    yield 'Luigi';
//    yield 'Toad';
//    yield 'Peach';
//    return 'Bowser';
//}
//
//const generateMario = Mario();
//
//let done = false;
//
//while(!done) {
//    let next = generateMario.next();
//    console.log(`Character: ${next.value}`);
//    console.log(`Is done: ${next.done}
//    `);
//    done = next.done;
//}



/*
Yield also has a return value, but it's not
necessarily the value you'd think it would be,
in that it's not the result of the yield statement.
 ---------------
 */

//function* Mario() {
//    let val = yield 'Mario';
//    console.log(`val: ${val}`);
//    val = yield val || 'Luigi';
//    console.log(`val: ${val}`);
//    val = yield val || 'Toad';
//    console.log(`val: ${val}`);
//    val = yield val || 'Peach';
//    console.log(`val: ${val}`);
//    return val || 'Bowser';
//}
//
//const generateMario = Mario();
//
//let done = false;
//
//while(!done) {
//    let next = generateMario.next();
//    console.log(`Character: ${next.value}`);
//    console.log(`Is done: ${next.done}
//    `);
//    done = next.done;
//}



/*
The return value of yield is actually the data
passed into the `next()` as arguments
 ---------------
 */

//function* Mario(val) {
//    console.log(`val: ${val}`);
//    val = yield val || 'Mario';
//    console.log(`val: ${val}`);
//    val = yield val || 'Luigi';
//    console.log(`val: ${val}`);
//    val = yield val || 'Toad';
//    console.log(`val: ${val}`);
//    val = yield val || 'Peach';
//    console.log(`val: ${val}`);
//    return val || 'Bowser';
//}
//
//const generateMario = Mario();
//
//let done = false;
//
//while(!done) {
//    let next = generateMario.next('COLIN!!!');
//    console.log(`Character: ${next.value}`);
//    console.log(`Is done: ${next.done}
//    `);
//    done = next.done;
//}



/*
If we want to make data available to the first yield,
we have to pass it in when we instantiate the generator.
 ---------------
 */

//function* Mario(val) {
//    val = yield val || 'Mario';
//    console.log(`val: ${val}`);
//    val = yield val || 'Luigi';
//    console.log(`val: ${val}`);
//    val = yield val || 'Toad';
//    console.log(`val: ${val}`);
//    val = yield val || 'Peach';
//    console.log(`val: ${val}`);
//    return val || 'Bowser';
//}
//
//const generateMario = Mario('Colin?');
//
//let done = false;
//
//while(!done) {
//    let next = generateMario.next('COLIN!!!');
//    console.log(`Character: ${next.value}`);
//    console.log(`Is done: ${next.done}
//    `);
//    done = next.done;
//}

