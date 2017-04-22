/*
There are a lot of iteratable data types in JavaScript.
In this first example, we'll look at the one we're most
familiar with, Arrays.  We can use the Iterator protocol
to iterate through each item with the `next()` method
 ---------------
 */

const marioList = ['Mario', 'Luigi', 'Toad', 'Peach'];

const explicitListIterator = marioList[Symbol.iterator]();

console.log(`The explicit list iterator:`);

let explicitNext = explicitListIterator.next();
console.log(`Character: ${explicitNext.value}`);
console.log(`Is done: ${explicitNext.done}
`);

explicitNext = explicitListIterator.next();
console.log(`Character: ${explicitNext.value}`);
console.log(`Is done: ${explicitNext.done}
`);

explicitNext = explicitListIterator.next();
console.log(`Character: ${explicitNext.value}`);
console.log(`Is done: ${explicitNext.done}
`);

explicitNext = explicitListIterator.next();
console.log(`Character: ${explicitNext.value}`);
console.log(`Is done: ${explicitNext.done}
`);

explicitNext = explicitListIterator.next();
console.log(`Character: ${explicitNext.value}`);
console.log(`Is done: ${explicitNext.done}
`);

console.log(`
---------------
`);



/*
You're more likely to use or see a while-loop running
over an iterator than to explicitly call next() each time
 ---------------
 */

//const marioWhileList = ['Mario', 'Luigi', 'Toad', 'Peach'];
//
//const listIterator = marioList[Symbol.iterator]();
//
//let listDone = false;
//
//console.log('An iterator in a while loop:');
//
//while(!listDone) {
//    let next = listIterator.next();
//    console.log(`Character: ${next.value}`);
//    console.log(`Is done: ${next.done}
//    `);
//    listDone = next.done;
//}
//
//console.log(`
//---------------
//`);


/*
Sets, which we talked about last time, also present
iterable data types.  When we call the `values()`
method on a set, it returns an iterable object,
which we can iterate over with the Iterator protocol.
 ---------------
 */

//const marioSet = new Set(['Mario', 'Luigi', 'Toad', 'Peach']);
//
//const setValues = marioSet.values();
//
//let setDone = false;
//
//console.log('Iterating over set values:');
//
//while(!setDone) {
//    let next = setValues.next();
//    console.log(`Character: ${next.value}`);
//    console.log(`Is done: ${next.done}
//    `);
//    setDone = next.done;
//}
//
//console.log(`
//---------------
//`);



/*
Maps, when fetching entries, keys, or values, also
return iterable data.  In the example below, we
fetch the entries in a map, deconstruct each key-value
pair, and console log it out.
 ---------------
 */

//const marioMap = new Map();
//
//marioMap.set('Hero', 'Mario');
//marioMap.set('Sidekick', 'Luigi');
//marioMap.set('Comic Relief', 'Toad');
//marioMap.set('Damsel', 'Peach');
//
//const mapEntries = marioMap.entries();
//
//let mapDone = false;
//
//console.log('Iterating over map entries:');
//
//while(!mapDone) {
//
//    const next = mapEntries.next();
//    mapDone = next.done;
//
//    if(next.value) {
//        const [role, name] = next.value;
//        console.log(`${name} is the ${role} of our story`);
//    } else {
//        console.log(`value is ${next.value}`);
//    }
//
//    console.log(`Is done: ${next.done}
//    `);
//}
