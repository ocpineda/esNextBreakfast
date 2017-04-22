/*
 In the past, we couldn't break lines in strings
 ------------
 */
const someBrokenString = 'Krewe de Vieux'
    'is arguably has the best parade in town.';

console.log(someBrokenString);



/*
 If we wanted to break lines, we'd have to add
 a carriage return, which is a bummer, and if we
 want to break lines in our code, we use string
 concatenation
 ------------
 */

//const concatenatedString = 'Krewe de Vieux\n' +
//'is arguably has the best parade in town.';
//
//console.log(concatenatedString);



/*
 With string literals, we simply add a line break
 ------------
 */

//const literalLineBreak = `St. Patty's Day
//is probably the second best.`;
//
//console.log(literalLineBreak);



/*
 In fact, every space used in creating a string
 is taken literally, including indents
 ------------
 */

//const seriousHonesty = `
//Honestly...
//
//    I know a lot of people like Endymion...
//
//        but I really don't dig the crowds.`;
//
//console.log(seriousHonesty);