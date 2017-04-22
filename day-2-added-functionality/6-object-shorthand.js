/*
Typically, as a convention of making our code easy to read
a lot of JS developers have gotten into the habit of
giving variables a name that matches a property in an
object where their values will eventually end up.
 ------------
 */

//const taxRate = 1.09,
//    shippingFee = 5;
//
//const costPolicy = {
//    taxRate: taxRate,
//    shippingFee: shippingFee
//};
//
//console.log(costPolicy.taxRate);
//console.log(costPolicy.shippingFee);



/*
As a convenience, ES2015 introduced a shorthand approach to
assigning properties in object literals based on this practice
above, assuming that if there is a recognized variable with
a name matching the property listed, its value will fill 
that property's value.
 ------------
 */

//const taxRate = 1.09,
//    shippingFee = 5;
//
//const costPolicy = {
//    taxRate,
//    shippingFee
//};
//
//console.log(costPolicy.taxRate);
//console.log(costPolicy.shippingFee);



/*
In fact, its not just variables that allow us to define 
object properties using the shorthand method.  We can use
function arguments for the same purpose as well.
 ------------
 */

//function setCostPolicy(taxRate, shippingFee) {
//    return {
//        taxRate,
//        shippingFee
//    }
//}



/*
In the olden days, when we would define methods, we would
use the standard function declaration format.
 ------------
 */

//function longCostMultiplier(taxRate, shippingFee) {
//    return {
//        taxRate,
//        shippingFee,
//        calculateFinalPrice: function(price) {
//            return price * this.taxRate + this.shippingFee;
//        }
//    }
//}
//
//const longPolicy = longCostMultiplier(1.09, 5);
//
//console.log(longPolicy.calculateFinalPrice(20));



/*
Object shorthand allows us to omit some of that syntax,
recognizing our intentions based on the use of parentheses
in declaring our property.
 ------------
 */

//function shortCostMultiplier(taxRate, shippingFee) {
//    return {
//        taxRate,
//        shippingFee,
//        calculateFinalPrice(price) {
//            return price * this.taxRate + this.shippingFee;
//        }
//    }
//}
//
//const shortPolicy = shortCostMultiplier(1.09, 5);
//
//console.log(shortPolicy.calculateFinalPrice(20));
