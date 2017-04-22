/*
Promises aren't necessarily always resolved.  They can
also be rejected.  Rejections are handled as errors in
a promise handler.

However, if we don't handle a rejection, it will go
uncaught and disappear into the ether.
 ---------------
 */

function rejectedPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Rejected promise :(');
        }, 1000);
    });
}

rejectedPromise()
    .then(res => console.log(res));



/*
Instead of letting it go unhandled, we can pass in a second
function to our Promise resolve, which will handle rejected
Promises.

However, this is considered an anti-pattern, as it
would require attaching a rejection handler for every Promise
in a chain.
 ---------------
 */

//function rejectedPromise() {
//    return new Promise((resolve, reject) => {
//        setTimeout(() => {
//            reject('Rejected promise :(');
//        }, 1000);
//    });
//}
//
//rejectedPromise()
//    .then(
//        res => console.log(res),
//        err => console.log(`Uh oh... ${err}`)
//    );



/*
So instead, we attach a `catch` method to our promise call,
which will allow us to handle any errors that happen during
our pending Promise.  In this case, it handles the rejection.
 ---------------
 */

//function rejectedPromise() {
//    return new Promise((resolve, reject) => {
//        setTimeout(() => {
//            reject('Rejected promise :(');
//        }, 1000);
//    });
//}
//
//rejectedPromise()
//    .then(res => console.log(res))
//    .catch(err => console.log(`Uh oh... ${err}`));



/*
If an actual error is thrown, it will disappear into the ether,
much like an unhandled rejection, if we don't handle it.
 ---------------
 */

//function erroneousPromise() {
//    return new Promise(() => {
//        throw new Error('Broken promise :(');
//    });
//}
//
//erroneousPromise()
//    .then(res => console.log(`res: ${res}`));



/*
A `catch` will handle those as well.
 ---------------
 */

//function erroneousPromise() {
//    return new Promise((resolve) => {
//        throw new Error('Broken promise :(');
//    });
//}
//
//erroneousPromise()
//    .then(res => console.log(`res: ${res}`))
//    .catch(err => console.log(`Uh oh... ${err}`));



/*
One of the reasons people generally prefer a catch over
a rejection handler is that a catch will also handle any
errors that happen during the resolve handler.
 ---------------
 */

//function erroneousResolve() {
//    return new Promise((resolve) => {
//        setTimeout(() => {
//            resolve('COLIN!');
//        }, 1000);
//    });
//}
//
//erroneousResolve()
//    .then(res => {
//        throw new Error('Broken resolve :(');
//    })
//    .catch(err => console.log(`Uh oh... ${err}`));



/*
Finally, a `catch` at the end of a Promise chain will handle
any errors thrown in the execution of that chain.  That means
that an error could happen several steps down in a chain, and
it would still only take one `catch` to handle it.
 ---------------
 */

//function topPromise() {
//    return new Promise(resolve => {
//        console.log(`[topPromise]: starting...`);
//        setTimeout(() => {
//            console.log(`[topPromise]: resolving.`);
//            resolve('Value!');
//        }, 1000);
//    });
//}
//
//function nestedPromise(someValue) {
//    return new Promise(resolve => {
//        console.log(`[nestedAsync]: passed in someValue is ${someValue}`);
//        setTimeout(() => {
//            console.log(`[nestedAsync]: resolving.`);
//            resolve('Deeper Value!!');
//        }, 1000);
//    });
//}
//
//function furtherNestedPromise(anotherValue) {
//    return new Promise((resolve) => {
//        console.log(`[furtherNestedAsync]: throwing an error...`);
//        throw new Error('Broken furtherNestedAsync promise :(');
//    });
//}
//
//topPromise()
//    .then(nestedPromise)
//    .then(furtherNestedPromise)
//    .then(evenDeeperValue => {
//        console.log(`[deep deep promise resolve]: evenDeeperValue is: ${evenDeeperValue}`);
//    })
//    .catch(err => console.log(`[catch]: Uh oh... ${err}`));