
/*
The `all` static method is one of the most important pieces
of functionality in the Promise object.  It allows us to execute
a series of Promises, passed in as an iterable, and won't resolve
until all Promises have succeeded.

We'll use the following function in all of the examples in this file.
 ---------------
 */

function promiseValue(val, time = 1000, shouldThrow = false) {
    return new Promise(resolve => {
        if(shouldThrow) {
            throw new Error(`Bad things happening in ${val}...`);
        } else {
            setTimeout(() => {
                resolve(`Resolving ${val}`);
            }, time)
        }
    });
}

/*
As a Promise.all expects an iterable, the most obvious data type
that we can pass in is an Array.  In this example, we pass in an
Array of pending Promises.
 ---------------
 */

const asyncArray = [
    promiseValue('FieldVision'),
    promiseValue('SmartShop', 1500),
    promiseValue('Digital Asset Passport', 2000)
];

Promise.all(asyncArray)
    .then(res => {
        console.log(`Results of the asyncArray Promise.all:`);
        console.log(res);
    })
    .catch(err => console.log(err));

/*
As an alternative to a Promise.all, we can call a Promise.race,
which will resolve once the first pending Promise in the iterable
has succeeded.
 ---------------
 */

//Promise.race(asyncArray)
//    .then(res => {
//        console.log(`Results of the asyncArray Promise.race:`);
//        console.log(res);
//    })
//    .catch(err => console.log(err));



/*
If a Promise.all encounters an error at any point, for any of the
promises passed in, it will return only that error to an attached
handler.  None of the other resolved data will be passed back.
 ---------------
 */

//const errorArray = [
//    promiseValue('FieldVision'),
//    promiseValue('SmartShop', 1500, true),
//    promiseValue('Digital Asset Passport', 2000)
//];
//
//Promise.all(errorArray)
//    .then(res => {
//        console.log(`Results of the asyncArray Promise.all:`);
//        console.log(res);
//    })
//    .catch(err => console.log(err));



/*
Because we can pass in an iterable, we can pass in values that stem
from other data types as well.  In this example, we'll pass in a Map's
values, which we would then be able to re-assign to its keys once the
Promise.all has resolved.
 ---------------
 */

//const asyncMap = new Map();
//
//asyncMap.set('FV', promiseValue('FieldVision'));
//asyncMap.set('Shop', promiseValue('Smart Shop', 1500));
//asyncMap.set('DAP', promiseValue('Digital Asset Passport', 2000));
//
//console.log(`[pre-promise]: The asyncMap with unresolved Promises:`);
//console.log(asyncMap);
//
//const mapKeys = asyncMap.keys();
//
//Promise.all(asyncMap.values())
//    .then(res => {
//        console.log(`[post-promise]: Results of the asyncMap Promise.all:`);
//        console.log(res);
//
//        for(let i = 0; i < res.length; i++) {
//            let key = mapKeys.next().value;
//            asyncMap.set(key, res[i]);
//        }
//
//        console.log(`[post-remap]: Final async map with data:`);
//        console.log(asyncMap);
//    })
//    .catch(err => console.log(err));



/*
And because generators are iterables too, you can pass a generator
to a Promise.all, with the yielded values being resolved in the final
success output.
 ---------------
 */

//function *promiseGenerator() {
//    yield promiseValue('FieldVision');
//    yield promiseValue('Smart Shop', 1500);
//    yield promiseValue('Digital Asset Passport', 2000);
//}
//
//const asyncGen = promiseGenerator();
//
//Promise.all(asyncGen)
//    .then(res => {
//        console.log(`Results of the asyncGen Promise.all:`);
//        console.log(res);
//    })
//    .catch(err => console.log(err));
