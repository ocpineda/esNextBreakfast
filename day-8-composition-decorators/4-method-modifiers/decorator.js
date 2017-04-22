/*
In this file we define two decorators.

The first will add functionality when the method is called, and then
continue to call the original method.

The second will replace the method functionality with a function
that throws an error instead of firing the functionality that's been
defined.
 ---------------
 */

export function deprecate(target, key, desc) {
    let hasNewVal = {
        value() {
            console.warn(`Uh oh! ${key} will be deprecated in the future!`);
            return desc.value.apply(target, arguments);
        }
    };
    return Object.assign({}, desc, hasNewVal);
}

export function disable(target, key, desc) {
    let hasNewVal = {
        value() {
            throw new Error(`The ${key} method has been disabled!`);
        }
    };
    return Object.assign({}, desc, hasNewVal);
}