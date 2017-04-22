/*
In traditional object composition, we have always been able to add
functionality using mixins.
 ---------------
 */

function addCommunicationSkills() {
    this.introduction = (firstName) => {
        return `It's me! ${firstName}!`;
    }
}

let someDude = {};

// the `call` method lets us pass in a functional context, which in
// this case, will be the `someDude` object
addCommunicationSkills.call(someDude);

console.log(`the someDude object:`, someDude);
console.log(someDude.introduction('Mario'));

console.log(`
---------------
`);



/*
We can even make use of the assumed functional context that will be
passed in when building our functionality
 ---------------
 */

//function addSelfIdentification() {
//    console.log(`logging 'this':`, this);
//    this.introduction = () => {
//        return `It's me! ${this.firstName}!`;
//    }
//}
//
//let someNamedDude = {
//    firstName: 'Mario'
//};
//
//// the `call` method lets us pass in a functional context, which in
//// this case, will be the `someNamedDude` object, meaning the
//// mixin has access to the `firstName` property
//addSelfIdentification.call(someNamedDude);
//
//console.log(`the someNamedDude object:`, someNamedDude);
//console.log(someNamedDude.introduction());
//
//console.log(`
//---------------
//`);



/*
Similar to how we can pass in methods, we can also pass in properties
 ---------------
 */

//function addPlumberProperties() {
//    this.navigatesPipes = true;
//    this.hasMustache = true;
//    this.alwaysGoingFromHouseToHouse = true;
//}
//
//let mario = {
//    firstName: 'Mario'
//};
//
//addPlumberProperties.call(mario);
//// if we wanted to, we could combine mixins
//addSelfIdentification.call(mario);
//
//console.log(`logging the mario object:`, mario);
//
//console.log(`
//---------------
//`);



/*
Finally, we can even add arguments to mixins so that they can add
dynamic properties or functionality
 ---------------
 */

//function addHeroProperties() {
//    this.uniformColor = arguments[0];
//    this.heroAction = () => {
//        return `I fight evil ${arguments[1]}!!!`;
//    }
//}
//
//addHeroProperties.call(mario, 'red', 'turtles');
//
//console.log(`logging mario as a hero:`, mario);
//console.log(`---
//and ${mario.firstName} says...`);
//console.log(mario.heroAction());