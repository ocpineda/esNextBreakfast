/*
 It's easy to recognize an arrow function based
 on the () => {} syntax
 ------------
 */

const withParntheses = (firstWord) => {
    console.log(firstWord);
};

withParntheses('Mardi...');



/*
 However you can also ditch the parentheses when
 you only have one argument
 ------------
 */

//const withoutParenth = firstWord => {
//    console.log(firstWord);
//};
//
//withoutParenth('Mardi...');



/*
 If you try to do this with more than one argument,
 you'll end up throwing an error
 ------------
 */

//const multipleParams = firstWord, secondWord => {
//    console.log(firstWord + ' ' + secondWord);
//};
//
//multipleParams('Mardi', 'Gras!');



/*
 So for more than one argument, you'll always need
 to use parentheses
 ------------
 */

//const withoutErrors = (firstWord, secondWord) => {
//    console.log(firstWord + ' ' + secondWord);
//};
//
//withoutErrors('Mardi', 'Gras!');



/*
 When you don't have any arguments, you declare your
 function with an empty pair of parentheses
 ------------
 */

//const noArgs = () => console.log('No Arg Gras!');
//
//noArgs();
