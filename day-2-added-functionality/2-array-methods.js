/*
In programming, we commonly have to run searches on arrays
of data to see if any of their values pass a certain test
 ------------
 */

const oldId = 3;
const oldArray = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Paul' },
    { id: 3, name: 'George' },
    { id: 4, name: 'Ringo' }
];

let oldValue;

for (let i = 0; i < oldArray.length; i++) {
    if(oldArray[i].id === oldId) {
        oldValue = oldArray[i];
        break;
    }
}

console.log(oldValue.name);



/*
With ES2015, the new array method `find` was introduced,
which executes a test function on each value in the
set, returning the first value found that causes the
test function to return true
 ------------
 */

//const newId = 3;
//const newArray = [
//    { id: 1, name: 'John' },
//    { id: 2, name: 'Paul' },
//    { id: 3, name: 'George' },
//    { id: 4, name: 'Ringo' }
//];
//
//const newValue = newArray.find(item => item.id === newId);
//
//console.log(newValue.name);



/*
The `find` method takes three arguments:
 - the item in the array currently being examined
 - that item's index in the array
 - the array itself

So if you wanted to pull the first odd value in the
array that was neither the first nor last value, you
could examine the index and the array instead of the
item and its properties
 ------------
 */

//const argsArray = [
//    { id: 1, name: 'John' },
//    { id: 2, name: 'Paul' },
//    { id: 3, name: 'George' },
//    { id: 4, name: 'Ringo' }
//];
//
//const argsResult = argsArray.find((item, ind, arr) => {
//    return (ind % 2 === 0) &&
//        (ind !== 0) &&
//        (ind !== arr.length - 1);
//});
//
//console.log(argsResult.name);



/*
The `find` method returns undefined if it can't find a
matching value.
 ------------
 */

//const unfoundArray = [
//    { id: 2, name: 'Paul' },
//    { id: 4, name: 'Ringo' }
//];
//
//const unfoundResult = unfoundArray.find((item, ind, arr) => {
//    return (ind % 2 === 0) &&
//        (ind !== 0) &&
//        (ind !== arr.length - 1);
//});
//
//console.log(unfoundResult);



/*
Similarly, we can use the `findIndex` to find the index
in an array of an item that matches our criteria.
 ------------
 */

//const indexArray = [
//    { name: 'John', instrument: 'guitar' },
//    { name: 'Paul', instrument: 'bass' },
//    { name: 'George', instrument: 'guitar' },
//    { name: 'Ringo', instrument: 'drums' }
//];
//
//const bassIndex = indexArray.findIndex(item => item.instrument === 'bass');
//
//console.log(bassIndex);



/*
Note that for both `find` and `findIndex`, the return value
is only the first value found.
 ------------
 */

//const firstArray = [
//    { name: 'John', instrument: 'guitar' },
//    { name: 'Paul', instrument: 'bass' },
//    { name: 'George', instrument: 'guitar' },
//    { name: 'Ringo', instrument: 'drums' }
//];
//
//const firstValue = firstArray.find(x => x.instrument === 'guitar');
//
//console.log(firstValue.name);