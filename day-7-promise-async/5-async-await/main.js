
/*
In the ES2017 specification, the `async` keyword was added, which
declares a function that returns a promise, though that isn't readily
obvious, and its resolved data is declared with a return.

In general, it's used alongside the `await` keyword, which adds
synchronous syntax to an async process.

In the examples in this file, we'll use the following example to set
up some async calls.
 ---------------
 */

function promiseValue(val, time = 1000, shouldThrow = false) {
    return new Promise(resolve => {
        if(shouldThrow) {
            throw new Error(`Bad things happening, ${val}...`);
        } else {
            setTimeout(() => {
                resolve(`Resolving ${val}`);
            }, time)
        }
    });
}



/*
Notice that in this function, we declare it as `async`, and then
call `await` on a function that we know returns a Promise.  The
`await` keyword causes the `async` function to paush while the
Promise is resolved, and the resolved value is the resulting
returned value.
 ---------------
 */

async function getPromiseVal() {
    const returnVal = await promiseValue('wait for it...', 1000);
    console.log(`[post-await]: awaited promise value is ${returnVal}`);
    return returnVal;
}

getPromiseVal().then(val => console.log(`[resolve]: val is ${val}`));



/*
Note that just like with Promises, an `async` function will throw
an error that disappears into the ether if left unhandled.
 ---------------
 */

//async function getPromiseVal() {
//    const returnVal = await promiseValue(`didn't wait for it...`, 1000, true);
//    console.log(`awaited promise value is ${returnVal}`);
//    return returnVal;
//}
//
//getPromiseVal().then(val => console.log(`asyncVal is ${val}`));



/*
Keep in mind that an `async` function returns a Promise.  So if we're going to
handle errors in an `async` function, we'll have to do it the same way we would
in a Promise error handler.
 ---------------
 */

//async function getPromiseVal() {
//    const returnVal = await promiseValue(`didn't wait for it...`, 1000, true);
//    console.log(`awaited promise value is ${returnVal}`);
//    return returnVal;
//}
//
//getPromiseVal()
//    .then(val => console.log(`asyncVal is ${val}`))
//    .catch(err => console.error(`Uh oh... ${err.message}`));



/*
Alternatively, we can wrap our `await` in a try/catch, so as to handle any
errors thrown in the async process that we're waiting on with alternate
functionality.
 ---------------
 */

//async function getPromiseVal() {
//    try {
//        const returnVal = await promiseValue('async!', 1000, true);
//        console.log(`awaited promise value is ${returnVal}`);
//        return returnVal;
//    } catch(e) {
//        return 'going to wait somewhere else.';
//    }
//}
//
//getPromiseVal()
//    .then(val => console.log(`asyncVal is ${val}`))
//    .catch(err => console.error(`Uh oh... ${err.message}`));
