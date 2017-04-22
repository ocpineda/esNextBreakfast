/*
Now we'll have our developer meet with Product Owners, and see
how we can use static methods in ES2015 classes to execute method
calls without creating a new instance.
 ---------------
 */
import { ProductOwner } from './product-owner';

/*
Meetings with product owners start to pop up.  Notice that in this
expression, we're not creating a new instance of the ProductOwner
class before calling its static method.
 ---------------
 */
ProductOwner.demandFeatures();

/*
Since the `extendDeadline` method isn't static, we can't simply call
it until we have instantiated
 ---------------
 */

//ProductOwner.extendDeadline();

//const niceProductOwner = new ProductOwner();
//niceProductOwner.extendDeadline();

/*
But now that we've created a class instance, we can't call the
static method again off of that instance.
 ---------------
 */

//niceProductOwner.demandFeatures();
