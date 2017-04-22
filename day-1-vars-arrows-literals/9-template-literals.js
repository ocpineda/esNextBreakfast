/*
 In the past, we've always declared strings
 using some variation of quote marks - either
 single or double
 ------------
 */
const simpleString = 'This is a string';
console.log(simpleString);



/*
 Once ES2015 came around, the tick mark was
 introduced as a new way of declaring strings
 ------------
 */
//const tickMarkString = `This is also a string`;
//console.log(tickMarkString);



/*
 The biggest difference is that we can now
 interpret JS expressions in the string using
 template literals
 ------------
 */
//const variable = 'expression';
//const evaluatedString = `This string evaluates an ${variable}`;
//console.log(evaluatedString);



/*
 In evaluating expressions, we can actually get
 a little on the complex side
 ------------
 */
//const floors = ['30', '31', '33'];
//const truth = `We're always out of conference rooms on ${floors.join(', ')}`;
//console.log(truth);
//const possible = true;
//const officeStatus = `We ${possible ? 'might' : 'might not'} get more floors`;
//console.log(officeStatus);