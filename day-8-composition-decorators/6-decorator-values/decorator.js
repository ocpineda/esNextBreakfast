/*
In creating this decorator, we actually return a factory function
that will apply functionality to the target's prototype, based on
the value that we pass in to the decorator.
 ---------------
 */

export function addGreeting(value) {
    return target => {
        target.prototype.sayHi = () => {
            return `It's me! ${value}`;
        }
    }
}