/*
 We can write a function the old way:
 ------------
 */

const getExcited = function(phrase) {
    return phrase + '!';
};

const firstResult = getExcited('ES5');

console.log(firstResult);



/*
 Or we can write it using an arrow function:
 ------------
 */

//const getMoreExcited = (phrase) => {
//    return phrase + '!!!';
//};
//
//const secondResult = getMoreExcited('ES2015');
//console.log(secondResult);