import { checkAuthToken } from './check-auth-token-generator.js';

/*
This is the mock token that we'll pass into our generator.  We can
change the values passed to see how we can catch errors at different
stages in the validation process.
 */
const mockToken = {
    provider: 'Facebook',
    username: 'Luigi',
    auth: 'bearer ghXq21no8nfWEAli5ouDch0h4po3inqd2'
};

runAuthCheck(mockToken);

/*
In our runner, we have a try/catch that will return immediately
if it comes across an error. If it doesn't catch an error, it
will run to completion once the generator has run its course.
 */
function runAuthCheck(token) {

    const authCheck = checkAuthToken(token);

    let next = {};

    while(!next.done) {
        try {
            next = authCheck.next();
        } catch (e) {
            console.log(`Could not authenticate:`);
            return console.log(e);
        }
    }

    return console.log('THIS IS MAJOR TOM TO GROUND CONTROL');
}