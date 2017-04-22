/*
 let and const can take a value right at instantiation,
 just like var
 ------------
 */

let value1 = 'first let value';

try {
    console.log(value1 + ' is defined');
} catch(e) {
    console.log('value1 is not defined');
}

const constant1 = 'first const value';

try {
    console.log(constant1 + ' is defined');
} catch(e) {
    console.log('constant1 is not defined');
}



/*
 However let and const cannot be hoisted.
 ------------
 */

//try {
//    console.log(value2 + ' is defined');
//} catch(e) {
//    console.log('value2 is not defined');
//}
//
//
//try {
//    console.log(constant2 + ' is defined');
//} catch(e) {
//    console.log('constant2 is not defined');
//}
//
//let value2 = 'second let value';
//const constant2 = 'second const value';



/*
 JS will throw an error if you try to redefine a const
 ------------
 */

//try {
//    value1 = 'new let value has been set';
//    console.log(value1);
//} catch(e) {
//    console.log('could not redefine a let!');
//    console.log(e);
//}
//
//try {
//    constant1 = 'new const value has been set';
//    console.log(constant1);
//} catch(e) {
//    console.log('could not redefine a constant!');
//    console.log(e);
//}



/*
 Or if you try to instantiate a const without a value
 ------------
 */

//const thisthat;