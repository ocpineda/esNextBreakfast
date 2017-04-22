/*
 Let's take a look at this const
 ------------
 */
const obj = {
    first: 1,
    second: 2
};

console.log(obj);



/*
 Even though a const is supposed to be a constant value,
 its properties can be overwritten
 ------------
 */

//obj.first = 3;
//
//console.log(obj);
//
//obj.second = 4;
//
//console.log(obj);



/*
 They can even be deleted, or more properties can
 be added
 ------------
 */

//delete obj.first;
//
//console.log(obj);
//
//obj.third = 5;
//
//console.log(obj);



/*
 But this only works as long as the const remains an
 object.  If you try to change the data type, JS with
 throw an error
 ------------
 */

//obj = 'string!!!';
//
//console.log(obj);