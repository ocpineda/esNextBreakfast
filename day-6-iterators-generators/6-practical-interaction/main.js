import { UserDataEntry } from './gather-user-data.js';

/*
We'll define our local instances of the UserDataEntry class, and
the corresponding generator outside of the click handler so that
their state can be tracked outside of the callback.
 */
let userDataEntry,
    userGen;

/*
In this click handler we'll check to see if a local instance of the
class has been created. If not, we'll create it.  Other than that, it
blindly takes whatever value has been passed into the input and passes
it back to the generator, which maintains the state of the user's
progress, as well as the logic of how to parse that input.
 */
window.fetchVal = function() {
    let val = document.getElementById('input').value;

    if(!userDataEntry) {
        userDataEntry = new UserDataEntry(val, 'entry', 'display');
        userGen = userDataEntry.getData();
    }

    userGen.next(val);
};
