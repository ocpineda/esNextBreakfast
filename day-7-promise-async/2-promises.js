/*
ES2015 introduced the Promise object, which allows us to handle
async processes without getting into the nested mess of callbacks
 ---------------
 */

function promiseAsync() {
    return new Promise(resolve => {
        console.log(`[promiseAsync]: instantiating val.`);
        let val;
        setTimeout(() => {
            console.log(`[promiseAsync]: giving val a value.`);
            val = 'Value!';
            console.log(`[promiseAsync]: resolving.
            `);
            resolve(val);
        }, 1000);
    });
}

promiseAsync().then(val => console.log(`[promiseAsync resolve]: val is: ${val}`));



/*
At a glance, it can seem as though we don't much benefit from
Promises, as we can still write them in a format that's similar
to callback hell.

The three promises below are used in the next few examples.
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
//    return new Promise(resolve => {
//        console.log(`[furtherNestedAsync]: passed in anotherValue is: ${anotherValue}`);
//        setTimeout(() => {
//            console.log(`[furtherNestedAsync]: resolving.`);
//            resolve('Even Deeper Value!!');
//        }, 1000);
//    });
//}

//topPromise().then(val => {
//    console.log(`[top resolve]: val is: ${val}
//    `);
//    nestedPromise(val).then(deeperVal => {
//        console.log(`[deep resolve]: deeperVal is: ${deeperVal}
//         `);
//        furtherNestedPromise(deeperVal).then(evenDeeperValue => {
//            console.log(`[deep deep resolve]: evenDeeperValue is: ${evenDeeperValue}`);
//        });
//    });
//});



/*
However we can chain Promises together so that they're much
easier to read and to follow
 ---------------
 */

//topPromise()
//    .then(val => {
//        console.log(`[top resolve]: val is: ${val}
//        `);
//        return nestedPromise(val);
//    })
//    .then(deeperVal => {
//        console.log(`[deep resolve]: deeperVal is: ${deeperVal}
//         `);
//        return furtherNestedPromise(deeperVal);
//    })
//    .then(evenDeeperValue => {
//        console.log(`[deep deep resolve]: evenDeeperValue is: ${evenDeeperValue}`);
//    });



/*
Of course, you can always have the next call in your Promise chain
just be the next promise to resolve, anticipating that it'll handle
the resolved value as its argument.  That way your code becomes
very clean and legible.
 ---------------
 */

//topPromise()
//    .then(nestedPromise)
//    .then(furtherNestedPromise)
//    .then(evenDeeperValue => {
//        console.log(`[deep deep promise resolve]: evenDeeperValue is: ${evenDeeperValue}`);
//    });