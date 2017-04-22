/*
In this file, we'll import our first decorator, and attach
it to a method within a class.  That will give us access to
information about that method, and the capability to overwrite
certain aspects about that method.

It's important to note that this decorator is run as it's applied
to the method when this code is read by the JS engine.  We don't
have to call the method for the decorator to run.
 ---------------
 */

import { analyze } from './decorator';

class Dude {
    constructor() {}

    @analyze
    sayHi() {
        return `It's me! Mario!`;
    }
}

