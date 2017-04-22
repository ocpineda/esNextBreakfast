/*
Here, we'll use a decorator to add functionality to a class.  Notice
that the class is empty, yet we'll use a decorator to add the sayHi
method, and then call it to prove that it works
 ---------------
 */

import { addGreeting } from './decorator';

@addGreeting
class Dude {}

let mario = new Dude();

console.log(mario.sayHi());