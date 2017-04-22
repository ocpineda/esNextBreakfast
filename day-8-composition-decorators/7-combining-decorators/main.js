/*
In this last example, we'll combine decorators to see how things
can stack to add functionality to a class.

This is how we can use decorators to achieve the same composition
strategy you would find when combining properties and methods to
build an object.
 ---------------
 */

import { setPlumberProperties, setHeroProperties } from './decorator';

@setHeroProperties('red', 'turtles')
@setPlumberProperties({
    mustache: true,
    overalls: true
})
class Dude {
    constructor(name) {
        this.firstName = name;
    }

    sayHi() {
        return `It's me! ${this.firstName}!`;
    }
}

let mario = new Dude('Mario');

console.log(`mustache:`, mario.mustache);
console.log(`overalls:`, mario.overalls);
console.log(`color:`, mario.color);
console.log(mario.sayHi());
console.log(mario.heroAction());