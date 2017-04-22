/*
There are times when we need to pass in an array of
arguments on which we might want to operate.  In this
case, we might pass an array as an argument.
 ------------
 */

const prices = [5, 10, 15],
    tax = 1.09;

function arrayTaxMultiplier(taxRate, prices) {
    let finalPrices = [];
    prices.forEach(price => finalPrices.push(price * taxRate));
    return finalPrices;
}

console.log(arrayTaxMultiplier(tax, prices));



/*
Alternatively we might want to pass those values in
as arguments, and let the function handle how it will
deal with those values internally.  It allows us to
be more free with the amount of arguments passed in.

However it's not very verbose, and is probably not a
clear way of defining functionality.
 ------------
 */

//function paramlessMultiplier() {
//    // convert the arguments object to an array
//    const arrayOfArgs = Array.prototype.slice.call(arguments);
//    // take the first index as the tax rate
//    const taxRate = arrayOfArgs.shift();
//
//    // set upt the return array
//    let finalPrices = [];
//
//    // multiply on the rest of the args
//    arrayOfArgs.forEach(arg => finalPrices.push(arg * taxRate));
//
//    return finalPrices;
//}
//
//console.log(paramlessMultiplier(1.09, 5, 10, 15));



/*
ES2015 introduces a way to handle a combination of both
approaches, where the amount of arguments passed is open,
but the function declaration is very clear about the data
being passed in.
 ------------
 */

//function restParamTaxMultiplier(taxRate, ...prices) {
//    let finalPrices = [];
//    prices.forEach(price => finalPrices.push(price * taxRate));
//    return finalPrices;
//}
//
//console.log(restParamTaxMultiplier(1.09, 5, 10, 15));



/*
It's important to note that while the rest parameter can
be the only, or the last param in a function definition,
at cannot have any other arguments defined after it
 */

//function errorTaxMultiplier(...prices, taxRate) {
//    let finalPrices = [];
//    prices.forEach(price => finalPrices.push(price * taxRate));
//    return finalPrices;
//}
//
//
//console.log(restParamTaxMultiplier(5, 10, 15, 1.09));
