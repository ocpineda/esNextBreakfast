/*
In creating this decorator, we actually return a factory function
that will apply functionality to the target's prototype, based on
the value that we pass in to the decorator.
 ---------------
 */

export function setPlumberProperties(obj) {
    return target => {
        for(let prop in obj) {
            if(obj.hasOwnProperty(prop)) {
                target.prototype[prop] = obj[prop];
            }
        }
    };
}

export function setHeroProperties(color, enemy) {
    return target => {
        target.prototype.color = color;
        target.prototype.heroAction = () => {
            return `I fight evil ${enemy}!!!`;
        };
    };
}