/*
This time we'll add some functionality to our decorator, in order to demonstrate
how we can modify, or even entirely overwrite the functionality of a method
using decorators
 ---------------
 */

import { deprecate, disable } from './decorator';

class Dude {
    @deprecate
    sayHi(name) {
        console.log(`It's me! ${name}!`);
    }

    @disable
    sayBye() {
        console.log(`Our princess is in another castle.`);
    }
}

let mario = new Dude();

// expect a console warning about deprecation
mario.sayHi('Mario');

console.log(`
---------------
`);

// expect an error to be thrown
mario.sayBye();