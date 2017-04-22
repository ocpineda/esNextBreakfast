/*
Asynchronous functions are nothing new to JavaScript.  In fact we've been
working with them for quite some time.  Most async processes involve
fetching data from a remote source, but we can simulate a data fetch
using another async process, a Timeout.

Let's take this function, which treats an async process as though it were
synchronous.
 ---------------
 */

function unhandledAsync() {
    let val;
    setTimeout(() => {
        val = 'Value!';
    }, 1000);
    return val;
}

console.log(`val is: ${unhandledAsync()}`);



/*
If we log out what's happening at each step in the process, we can see that
our synchronous function calls are all happening before our async function
has finished processing.
 ---------------
 */

//function stepByStepAsync() {
//    console.log(`[stepByStepAsync]: instantiating val.`);
//    let val;
//    setTimeout(() => {
//        console.log(`[stepByStepAsync]: giving val a value.`);
//        val = 'Value!';
//    }, 1000);
//    console.log(`[stepByStepAsync]: returning val.`);
//    return val;
//}
//
//console.log(`val is: ${stepByStepAsync()}`);


/*
In the olden days, we would leverage a callback to handle async processes.
That is, a function passed into a parent function as an argument, which would
only get fired once our async process is finished.
 ---------------
 */

//function asyncWithCallback(callback) {
//    console.log(`[asyncWithCallback]: instantiating val.`);
//    let val;
//    setTimeout(() => {
//        console.log(`[asyncWithCallback]: giving val a value.`);
//        val = 'Value!';
//        console.log(`[asyncWithCallback]: firing callback.
//        `);
//        callback(val);
//    }, 1000);
//}
//
//asyncWithCallback(val => console.log(`[callback]: val is: ${val}`));



/*
This can lead to some serious problems once you start nesting async
processes within callbacks, creating what's known as callback-hell
 ---------------
 */

//function topAsync(callback) {
//    console.log(`[topAsync]: starting...`);
//    setTimeout(() => {
//        console.log(`[topAsync]: firing callback.
//        `);
//        callback('Value!');
//    }, 1000);
//}
//
//function nestedAsync(someValue, callback) {
//    console.log(`[nestedAsync]: passed in someValue is ${someValue}`);
//    setTimeout(() => {
//        console.log(`[nestedAsync]: firing callback.
//        `);
//        callback('Deep Value!!');
//    }, 1000);
//}
//
//function furtherNestedAsync(anotherValue, callback) {
//    console.log(`[furtherNestedAsync]: passed in anotherValue is: ${anotherValue}`);
//    setTimeout(() => {
//        console.log(`[furtherNestedAsync]: firing callback.
//        `);
//        callback('Even Deeper Value!!');
//    }, 1000);
//}
//
//topAsync(val => {
//    console.log(`[callback]: val is: ${val}
//    `);
//    nestedAsync(val, deeperVal => {
//        console.log(`[deep callback]: deeperVal is: ${deeperVal}
//        `);
//        furtherNestedAsync(deeperVal, evenDeeperVal => {
//            console.log(`[deep deep callback]: evenDeeperVal is: ${evenDeeperVal}`);
//        });
//    });
//
//});