/*
 When we typically write functions, we have
 to declare what they'll return
 ------------
 */

const getExcited = phrase => {
    return phrase + '!';
};

const firstResult = getExcited('ES5');
console.log(firstResult);



/*
 When we only have one expression to evaluate
 using an arrow function, we can omit the {}
 to declare an expression that's immediately
 returned
 ------------
 */

//const getMoreExcited = phrase => phrase + '!!!';
//
//const secondResult = getMoreExcited('ES2015');
//console.log(secondResult);



/*
 Implicit returns won't work with more than
 one expression
 ------------
 */

//const tooExcited = phrase => let addOn = '!!!'; phrase + addOn;
//
//const thirdResult = tooExcited('ESFAIL');
//console.log(thirdResult);



/*
 In order to operate more than one expression,
 you'll have to wrap your function logic in {}.
 ------------
 */

//const twoStepExcitement = phrase => {
//    let addOn = '!!!';
//    return phrase + addOn;
//};
//
//const fourthResult = twoStepExcitement('ES-Two-Step');
//console.log(fourthResult);



/*
 However you'll have to explicitly return something,
 as implicit returns only work on individual
 expressions
 ------------
 */

//const emptyExcitement = phrase => {
//    phrase + '!!!';
//};
//
//const fifthResult = emptyExcitement('ESEmptiness');
//console.log(fifthResult);



/*
 Finally, if you try to implicitly return an object,
 bad things could happen if you don't do it correctly
 ------------
 */

//const notExcitement = (firstArg, secondArg) => {
//    tuesday: firstArg,
//    wednesday: secondArg
//};
//
//const sixthResult = notExcitement('fat', 'ash');
//console.log(sixthResult);



/*
 In order to implicitly return an object, you wrap
 it in parentheses
 ------------
 */

//const objectiveExcitement = (firstArg, secondArg) => ({
//    tuesday: firstArg,
//    wednesday: secondArg
//});
//
//const seventhResult = objectiveExcitement('fat', 'ash');
//console.log(seventhResult);
