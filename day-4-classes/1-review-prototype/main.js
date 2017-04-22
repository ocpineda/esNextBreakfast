/*
In this file, we'll create a new developer - a freelancer,
who falls in line with the typical freelancer career.  We'll
import the Freelancer constructor function from a different
file, and apply it here as a new instance
 ---------------
 */
import { Freelancer } from './freelancer'

/*
First, they read some books and some blog posts on
how to build websites using Photoshop and Dreamweaver
 ---------------
 */
const skills = ['PHP', 'WordPress', 'Web Design'];

/*
BOOM! A freelancer is born!  We construct a new Freelancer
instance by passing in an array of strings, which are applied
to its functional scope as this.skills in its constructor function
 ---------------
 */
const freelancer = new Freelancer(skills);

/*
Like any freelancer, they meet with clients.  Here and in the
following expressions, we call object prototype methods as they're
defined within the prototype method expressions in the constructor's
file
 ---------------
 */
freelancer.goToMeeting();

/*
One day our freelancer leans about some sweet DOM manipulation
 ---------------
 */
freelancer.addSkill('jQuery');

/*
And then applies for a job and has to list their skills
 ---------------
 */
freelancer.listSkills();

