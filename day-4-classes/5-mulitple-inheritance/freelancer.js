/*
 These days, we create a class, which sets up reusable functionality
 based on data we pass into a constructor function.
 ---------------
 */

export class Freelancer {

    /*
     The constructor function does what it sounds like - it is
     generally used to pass initial data to the functional scope
     of a class.
     ---------------
     */
    constructor(skills) {
        /*
         Much like with prototypical inheritance, we set instance
         members in a constructor function
         ---------------
         */
        this.skills = skills;
    }

    /*
     After a constructor, we define methods as members of this class,
     similarly to how we would define methods in an object
     ---------------
     */
    addSkill(skill) {
        /*
         Notice that an class method has access to instance members
         ---------------
         */
        this.skills.push(skill);
    }

    listSkills() {
        console.log('Listing skills...');
        console.log(`Resume: ${this.skills.join(', ')}`, '\n');
    }

    goToMeeting() {
        console.log('Going to a meeting...');
        console.log(`'It's about 90% done...'`, '\n');
    }

}