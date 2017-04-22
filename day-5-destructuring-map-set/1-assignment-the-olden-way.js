/*
In this file we demonstrate how we would pick apart items
and assign them to variables in the past.
 ---------------
 */

const testArray = ['JavaScript', 'HTML', 'CSS'];

const first = testArray[0];
const second = testArray[1];
const third = testArray[2];

console.log(`first: ${first}`);
console.log(`second: ${second}`);
console.log(`third: ${third}`);

console.log(`
---------------
`);

/*
Similarly, if we want to assign properties in an object
we would have to do so individually
 ---------------
 */

const testObj = {
    vocals: 'John',
    bass: 'Paul',
    guitar: 'George',
    drums: 'Ringo'
};

const vocals = testObj.vocals;
const bass = testObj.bass;
const guitar = testObj.guitar;
const drums = testObj.drums;

console.log(`vocals: ${vocals}`);
console.log(`bass: ${bass}`);
console.log(`guitar: ${guitar}`);
console.log(`drums: ${drums}`);