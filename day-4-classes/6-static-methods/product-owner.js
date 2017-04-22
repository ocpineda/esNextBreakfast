/*
In this file we'll set a static method, and a normal public method.
Notice that we also omitted the idea of a constructor entirely
 ---------------
 */

export class ProductOwner {

    extendDeadline() {
        console.log('Meeting with the PO...');
        console.log(`Hey look at that, we've been given more time!`, '\n');
    }

    /*
    This next method is static, meaning that it can be called without
    creating a new instance of this class.  Static methods lose all access
    to the class's functional scope, so we can't reference any other methods or
    instance members inside this class
     ---------------
     */
    static demandFeatures() {
        console.log('Meeting with the nice PO...');
        console.log(`...and now we're on the hook for more features`, '\n');
    }

}