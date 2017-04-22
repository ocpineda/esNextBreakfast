/*
Typically, when we want to determine whether or not
a string includes a certain character or substring,
we have to test for its index within that string
------------
 */

const someString = 'Like finding a needle in a haystack';
const isLegitIndex = someString.indexOf('needle') > -1;

console.log(isLegitIndex);



/*
ES2015 introduced a much more convenient way of doing
 the same thing, using the new `includes` method:
 ------------
 */

//const otherString = 'Like finding a needle in a haystack';
//const includesBool = someString.includes('needle');
//
//console.log(includesBool);



/*
It's worth noting that the `includes` method is
case-sensitive
 ------------
 */

//const nopeString = 'Like finding a needle in a haystack';
//const nopeBool = someString.includes('Needle');
//
//console.log(nopeBool);



/*
A second argument can be added, which will give the search
a starting index
 ------------
 */

//const tooFarString = 'Like finding a needle in a haystack';
//const tooFarBool = someString.includes('needle', 16);
//
//console.log(tooFarBool);



/*
Additionally, we used to determine if a string started with
a letter or substring based on determining if that string started
at the 0 index.
 ------------
 */

//const oldNeedle = 'Cali';
//const oldHaystack = 'California';
//
//console.log(oldHaystack.indexOf(oldNeedle) === 0);



/*
ES2015 introduced the `startsWith` method to the String
prototype, which will simply tell us whether or not a string
starts with the letter or substring we pass.  Note that
it's case sensitive as well.
 ------------
 */

//const newNeedle = 'Lou';
//const newHaystack = 'Louisiana';
//
//console.log(newHaystack.startsWith(newNeedle));



/*
Similarly, you can use the `endsWith` method to determine if
a string ends with a character or substring
 ------------
 */

//const endNeedle = 'Hub';
//const endHaystack = 'Nola Tech Hub';
//
//console.log(endHaystack.endsWith(endNeedle));



/*
How would you have done that with ES5 or below?
 ------------
 */

//const es5Needle = 'Hub';
//const es5Haystack = 'Nola Tech Hub';
//
//const haystackLength = es5Haystack.length,
//    needleLength = es5Needle.length,
//    testIndex = haystackLength - needleLength;
//
//console.log(es5Haystack.substr(testIndex, haystackLength) === es5Needle);
//// OR...
//console.log(es5Haystack.indexOf(es5Needle) === testIndex);



/*
Finally, it's worth pointing out that both `startsWith` and
`endsWith` can receive a second argument that restricts the
size of the string, in the direction that makes sense.
 ------------
 */

//const restrictedHaystack = 'Nola Tech Hub';
//
//// in this case, we give a starting position
//console.log(restrictedHaystack.startsWith('Tech', 5));
//
//// in this case, we restrict the length of the string
//// to the number specified
//console.log(restrictedHaystack.endsWith('Tech', 9));