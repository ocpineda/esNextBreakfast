/*
Alternatively, we can use destructuring assignment to assign
values from an array to variables instead.
 ---------------
 */

const forntEndArray = ['JavaScript', 'HTML', 'CSS'];

const [first, second, third] = forntEndArray;

console.log(`first: ${first}`);
console.log(`second: ${second}`);

console.log(`
---------------
`);



/*
In cases where we want to skip an item, we can do so by
simply leaving an empty space and adding a comma separator.
 ---------------
 */

const projectBuzzwordArray = ['reusable', 'critical', 'parity'];

const [firstBuzzword, , thirdBuzzword] = projectBuzzwordArray;

console.log(`firstBuzzword: ${firstBuzzword}`);
console.log(`thirdBuzzword: ${thirdBuzzword}`);

console.log(`
---------------
`);



/*
Similarly, we don't have to assign any properties at the end
of an array that we're not interested in
 ---------------
 */

const buzzword2013Array = ['CoffeeScript', 'Rails', 'Gems', 'Backbone', 'Jade'];

const [first2013, second2013] = buzzword2013Array;

console.log(`first2013: ${first2013}`);
console.log(`second2013: ${second2013}`);

console.log(`
---------------
`);



/*
Finally, if we wanted to, we could dump any of the items in the
array that we don't want to assign directly into another array
using the rest pattern
 ---------------
 */

const predixBuzzwords = ['Cloud Foundry', 'Polymer', 'Predix Design', 'InuitCSS'];

const [legit, ...meh] = predixBuzzwords;

console.log(`legit: ${legit}`);
console.log(`meh: ${meh.join(', ')}`);
