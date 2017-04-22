/*
There are times when we want to ensure that we
have a value to work with when programming a
function, even if a value isn't passed.
 ------------
 */

function oldSurcharge(price, add) {
    const additionalCharge =
        typeof add !== 'undefined' ? add : 1;

    return price + additionalCharge;
}

console.log(oldSurcharge(9));
console.log(oldSurcharge(9, 2));
console.log(oldSurcharge(9, 0));



/*
ES2015 introduces default parameters values that
we can use, should a caller of a function not
include a specific parameter.
 ------------
 */

//function newSurcharge(price, add = 1) {
//    return price + add;
//}
//
//console.log(newSurcharge(9));
//console.log(newSurcharge(9, 2));
//console.log(newSurcharge(9, 0));



/*
Alternatively, instead of defining a default param
value by hard-coding it, we can evaluate an expression
that will give us a dynamic value instead.
 ------------
 */

//function getSurcharge() {
//    // assume a database call
//    return 3;
//}
//
//function dynamicSurcharge(price, add = getSurcharge()) {
//    return price + add;
//}
//
//console.log(dynamicSurcharge(9));
//console.log(dynamicSurcharge(9, 2));
//console.log(dynamicSurcharge(9, 0));
