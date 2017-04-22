/*
Our former freelancer has become a full-fledged developer at GE.
Not only can we use methods defined within the GEDeveloper class, we
can use methods defined in the Freelancer class, as well as those
defined in the WebDesigner class, since GEDeveloper inherits from
both.
 ---------------
 */
import { GEDeveloper } from './ge-developer'

/*
One more time, we'll take a look at their skills as we last left
them...
 ---------------
 */
const skills = ['Web Design', 'jQuery', 'AngularJS', 'Node'];

const developer = new GEDeveloper(skills);

/*
However in this job, applications have all moved past jQuery, so
that's the first thing to go.  Here we'll use a method defined in
the WebDesigner class, the first level up in the hierarchy
 ---------------
 */
developer.forgetSkill('jQuery');

/*
On the other hand, other practices like Agile, TDD, and CI/CD become
second-nature.  Now we use methods defined in Freelancer, which is two
levels up in the hierarchy.  You can see that both levels of the
hierarchy work, and are implemented through the `extends` keyword
 ---------------
 */
developer.addSkill('Agile');
developer.addSkill('TDD');
developer.addSkill('CI/CD');

/*
Of course there are meetings...
 ---------------
 */
developer.goToMeeting();

/*
And plenty of work to do
 ---------------
 */
developer.doWork();
developer.doFanciness();

/*
After a while, a pod lead job opens up.  And so,
our once freelancer, former designer, now developer
applies for the job.  We'll wrap this file up with
a another reference to the final state of the
this.skills instance member
 ---------------
 */
developer.listSkills();