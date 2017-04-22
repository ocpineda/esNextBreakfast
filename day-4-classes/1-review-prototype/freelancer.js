/*
In the olden ways, we would write a constructor function
that we would use to implement object-specific properties
---------------
 */

export function Freelancer(skills) {
    this.skills = skills;
}

/*
We would then extend the prototype of that constructor with
methods that will be wired into any instance created by that
constructor function
---------------
 */

Freelancer.prototype.addSkill = function(skill) {
    this.skills.push(skill);
};

Freelancer.prototype.listSkills = function() {
    console.log('Listing skills...');
    console.log(`Resume: ${this.skills.join(', ')}`, '\n');
};

Freelancer.prototype.goToMeeting = function() {
    console.log('Going to a meeting...');
    console.log(`'It's about 90% done...'`, '\n');
};