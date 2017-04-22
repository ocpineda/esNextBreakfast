/*
In this file, we'll extend the properties of a previous
class by having a child class extend it, thus inheriting
all of its methods, add its own, and even overwriting
previously defined methods.
 ---------------
 */
import { Freelancer } from './freelancer';

export class WebDesigner extends Freelancer {

    constructor(skills) {
        /*
        The `super` keyword invokes the parent class's
        constructor function, and has to be the first
        expression in the child class's constructor
         ---------------
         */
        super(skills);
    }

    forgetSkill(skill) {
        console.log(`Forgetting how to ${skill}`);
        let ind = this.skills.indexOf(skill);
        this.skills.splice(ind, 1);
        console.log(`Well, can't ${skill} anymore`, '\n');
    }

    doWork() {
        console.log('Doing work...');
        console.log('<html></html>', '\n');
    }

    doFanciness() {
        console.log('Doing fancy work...');
        console.log(`$('html').doSomething()`, '\n');
    }

    /*
    We might even overwrite methods from the parent class,
    re-declaring methods in the child class
     ---------------
     */
    goToMeeting() {
        console.log('Going to a meeting...');
        console.log(`'You want me to redesign it...again?'`, '\n');
    }

}
