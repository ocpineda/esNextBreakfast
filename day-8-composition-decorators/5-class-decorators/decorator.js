/*
This decorator adds a method, so that any new instance of this
class receives this method automatically.  You can consider
this the class version of composition.

Notice that we add this method to the class prototype.  This
ensures that the method is inherited by new instances.  If we
were to add it to the target class, it would become a static
method that would not be inherited.
 ---------------
 */
export function addGreeting(target) {
    target.prototype.sayHi = () => {
        return `It's me! Mario!`;
    }
}