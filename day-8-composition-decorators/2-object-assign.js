/*
ES2015 introduced `Object.assign`, which allows a target object to
receive properties from other objects
 ---------------
 */

const hasCommunicationSkills = {
    introduction(firstName) {
        return `It's me! ${firstName}!`;
    }
};

const someDude = Object.assign({}, hasCommunicationSkills);

console.log(`the someDude object:`, someDude);
console.log(someDude.introduction('Mario'));

console.log(`
---------------
`);



/*
We can assume that there will be other properties when we set assignments,
so that we can utilize them in methods as they're added onto existing
objects
 ---------------
 */

//const hasSelfIdentification = {
//    introduction() {
//        return `It's me! ${this.firstName}!`;
//    }
//};
//
//const someNamedDude = {
//    firstName: 'Mario'
//};
//
//// In this case we're using a pre-existing object and adding a method
//// that will utilize its property
//const italianDude = Object.assign(someNamedDude, hasSelfIdentification);
//
//console.log(`the italianDude object:`, italianDude);
//console.log(italianDude.introduction());
//
//console.log(`
//---------------
//`);



/*
Object.assign sets properties in an order of left to right, so that the
objects assigned last can overwrite properties from the objects assigned
first, or in the original target
 ---------------
 */

//const hasPlumberProperties = {
//    navigatesPipes: true,
//    hasMustache: true,
//    alwaysGoingFromHouseToHouse: true
//};
//
//const mario = {
//    firstName: 'Mario'
//};
//
//const luigi = {
//    firstName: 'Luigi'
//};
//
//let plumber = Object.assign({}, luigi, hasPlumberProperties, mario);
//
//console.log(`logging the plumber object:`, plumber);
//
//console.log(`
//---------------
//`);



/*
Alternatively, instead of passing in object literals, we can pass in
factory functions so that we can define properties and method
functionality dynamically
 ---------------
 */

//function setHeroProperties(color, enemy) {
//    return {
//        color,
//        heroAction() {
//            return `I fight evil ${enemy}!!!`;
//        }
//    }
//}
//
//let hero = Object.assign(plumber, setHeroProperties('red', 'turtles'));
//
//console.log(`logging the hero object:`, hero);
//console.log(`---
//and ${hero.firstName} says...`);
//console.log(hero.heroAction());