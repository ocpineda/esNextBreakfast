/*
Let's take a look at the following ES5 expression
 ------------
 */

//const firstArray = ['a', 'b', 'c'],
//    secondArray = ['x', 'y', 'z'];
//
//console.log(firstArray.concat(secondArray));



/*
 In a case where we have to operate on the values
 of an array, and not the array itself, we would
 want to use the spread operator.
 ------------
 */

//const firstArray = ['a', 'b', 'c'],
//    secondArray = ['x', 'y', 'z'];
//
//console.log(...firstArray);
//console.log(...firstArray, ...secondArray);



/*
we can even use the values from several exploded arrays to
create new arrays, without having to use concatenation.
 ------------
 */

//const firstArray = ['a', 'b', 'c'],
//    secondArray = ['x', 'y', 'z'],
//    thirdArray = [...firstArray, ...secondArray];
//
//console.log(thirdArray);
//
//const crazyArray = ['m', ...firstArray, 'n', ...secondArray];
//
//console.log(crazyArray);


/*
In the previous example file, we created a function
that used the rest parameter construct to define a set
of arguments.  With the spread operator, we can explode
an array as the list of arguments passed into that function
 ------------
 */

//function restParamTaxMultiplier(taxRate, ...prices) {
//    let finalPrices = [];
//    prices.forEach(price => finalPrices.push(price * taxRate));
//    return finalPrices;
//}
//
//const cartValues = [1, 5, 10, 15];
//const result = restParamTaxMultiplier(1.09, ...cartValues);
//
//console.log(result);



/*
While we can use the spread operator to explode an array
in places that accept comma-separated values, we'll catch
an error if we try to store the result of the spread
operator in a variable.
 ------------
 */

//const values = [1, 2, 3];
//const errorVar = ...values;



/*
One of the benefits of the spread operator is that it allows
us to copy arrays easily without altering the original.  Take
the following example, which fails to create a copy of an array
and instead creates a reference to the original's object in memory
 ------------
 */

//const originalArray = [1, 2, 3];
//
//let copyArray = originalArray;
//
//copyArray.push(4);
//
//console.log(copyArray);
//console.log(originalArray); // I've made a terrible mistake



/*
With the spread operator, we can create a duplicate array
that has the same contents of the original array, without
risking making modifications to the original.
 ------------
 */

//const safeOriginalArray = [1, 2, 3];
//
//let valueCopyArray = [...safeOriginalArray];
//
//valueCopyArray.push(4);
//
//console.log(valueCopyArray);
//console.log(safeOriginalArray);