/*
In this file, we'll extend the properties of a previous
child class by having another child class extend it,
thus inheriting its parent's methods, its parent's parent's
methods.  Again we'll have this class add its own, and
even overwrite previously defined methods.
 ---------------
 */
import { WebDesigner } from './web-designer';

export class GEDeveloper extends WebDesigner {

    /*
    In this example, we're not setting a new constructor.
    The child class, when instantiated, will invoke its
    parent's constructor automatically.
     ---------------
     */

    forgetSkill(skill) {
        console.log(`Forgetting how to ${skill}`);
        let ind = this.skills.indexOf(skill);
        this.skills.splice(ind, 1);
        console.log(`Well, can't ${skill} anymore`, '\n');
    }

    doFanciness() {
        console.log('Doing fancy work...');
        console.log(`export class AWESOME {}`, '\n');
    }

    goToMeeting() {
        console.log('Going to a meeting...');
        console.log(`'Yesterday I..., Today I..., No impediments.'`, '\n');
    }

}
