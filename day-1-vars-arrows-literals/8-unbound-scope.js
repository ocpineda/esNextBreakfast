/*
 In a typical constructor function, we can't access
 the constructor's scope in its internal functions
 using the `this` keyword
 ------------
 */

function Developer(languages) {
    this.languages = languages;

    setTimeout(function() {
        console.log('Hi I\'m a developer and I speak ' + this.languages.join(', '));
    })
}

const colinLanguages = ['JavaScript', 'PHP', 'Ruby'];
const colin = new Developer();



/*
 in ES5, we would set the `this` value to a variable
 so that we could access its properties
 ------------
 */

//function Designer(languages) {
//    this.languages = languages;
//
//    let scope = this;
//
//    setTimeout(function() {
//        console.log('Hi I\'m a designer and I speak ' + scope.languages.join(', '));
//    }, 1000)
//}
//
//const jeremyLanguages = ['JavaScript', 'CSS', 'Sass'];
//const jeremy = new Designer(jeremyLanguages);



/*
 When using arrow functions, we don't lose the scope
 once we've entered an internal function
 ------------
 */

//function Programmer(languages) {
//    this.languages = languages;
//
//    setTimeout(() => {
//        console.log('Hi I\'m a programmer and I speak ' + this.languages.join(', '));
//    }, 1000)
//}
//
//const oscarLanguages = ['JavaScript', 'Java', 'C#'];
//const oscar = new Programmer(oscarLanguages);
