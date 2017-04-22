/*
Now that our freelancer has a full-time job doing things with
websites, we'll add a few methods to reflect how their life
has changed.  This will show how we implement a constructor
object that has inherited methods from a previous constructor
 ---------------
 */
import { WebDesigner } from './web-designer'

/*
First, let's review their skills, which we'll apply to the new
WebDesigner constructor
 ---------------
 */
const skills = ['PHP', 'WordPress', 'Web Design', 'jQuery'];

/*
Day 1 at the new job, we pass in an array of strings to construct
a new instance, as we would expect since the child object
still has to have the same constructor as the parent object in
order to inherit properly
 ---------------
 */
const designer = new WebDesigner(skills);

/*
Uh oh, turns out this is a Drupal shop.  WordPress skills start
to fade.  In this case and in the next few expressions, we're
calling methods defined within the child object, either as fresh
declarations, or as overwrites to previous declarations
 ---------------
 */
designer.forgetSkill('WordPress');

/*
Meetings with a problem client start to pile up.
 ---------------
 */
designer.doWork();
designer.goToMeeting();

/*
And become tiring
 ---------------
 */
designer.doFanciness();
designer.goToMeeting();

/*
Getting fed up with the design life, our designer learns more
about front-end programming, and forgets some older, dustier skills.
Now we get to the point where we start calling methods defined on the
parent object's prototype.
 ---------------
 */
designer.addSkill('AngularJS');
designer.forgetSkill('PHP');

/*
And maybe a little backend.
 ---------------
 */
designer.addSkill('Node');

/*
Finally, they apply for a job at GE.  To prove that it all worked, we
call a method defined on the parent object's prototype that lists out
all of the items in this.skills, showing how our method calls manipulated
the data inside our designer instance
 ---------------
 */
designer.listSkills();