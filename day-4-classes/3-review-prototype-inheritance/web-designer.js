/*
In this file, we'll extend the properties of a previous
constructor by setting it as the prototype of a new
constructor, and then adding new methods
 ---------------
 */
import { Freelancer } from './freelancer';

let webDesigner = function(skills) {
    this.skills = skills;
};

/*
In inheriting, we create a new instance of the parent object
as the child's prototype
 ---------------
 */
webDesigner.prototype = new Freelancer(webDesigner.skills);

/*
We then extend the prototype with a series of expressions,
just like we did in the previous example
 ---------------
 */
webDesigner.prototype.forgetSkill = function(skill) {
    console.log(`Forgetting how to ${skill}`);
    let ind = this.skills.indexOf(skill);
    this.skills.splice(ind, 1);
    console.log(`Well, can't ${skill} anymore`, '\n');
};

webDesigner.prototype.doWork = function() {
    console.log('Doing work...');
    console.log('<html></html>', '\n');
};

webDesigner.prototype.doFanciness = function() {
    console.log('Doing fancy work...');
    console.log(`$('html').doSomething()`, '\n');
};

/*
We might even overwrite methods from the parent constructor,
re-declaring methods in the inheriting object
 ---------------
 */
webDesigner.prototype.goToMeeting = function() {
    console.log('Going to a meeting...');
    console.log(`'You want me to redesign it...again?'`, '\n');
};

export const WebDesigner = webDesigner;
