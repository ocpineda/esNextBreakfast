/*
This example shows how we can pass data into a decorator
in order to dynamically set functionality.
 ---------------
 */

import { addGreeting } from './decorator';

@addGreeting('Luigi!')
class Dude {}

let luigi = new Dude();

console.log(luigi.sayHi());