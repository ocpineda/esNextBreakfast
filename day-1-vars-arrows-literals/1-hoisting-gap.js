/*
 Obviously, this won't work...
 ------------
 */

console.log(someVar);



/*
 So we generally define things before we use them
 ------------
 */

//var someVar = 'this that';
//console.log(someVar);



/*
 Through hoisting, we can prevent the JS from throwing if we use
 a variable before it's defined, as the variable is at least
 instantiated, even if without a value.
 ------------
 */

//console.log(otherVar);
//var otherVar = 'this that';
//console.log(otherVar);



/*
 That's the same as writing the following
 ------------
 */

//var anotherVar;
//console.log(anotherVar);
//anotherVar = 'this that';
//console.log(anotherVar);



/*
 With unintentional hoisting, we can create memory instances
 that we never meant to exist
 ------------
  */

//function getValue() {
//
//    if (1 === 2) {
//
//        var value = "blue";
//        return value;
//
//    } else {
//
//        // value exists here with a value of undefined
//        console.log(value);
//        return null;
//
//    }
//
//    // value also exists here with a value of undefined
//
//}
//
//getValue();
