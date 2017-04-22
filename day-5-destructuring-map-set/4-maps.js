/*
Here we'll explore Maps, a new data type in JS that keeps
collection data in key-value pairs
 ---------------
 */

let fieldVisionDevTeam = new Map([['Product Owner', 'Jake Piehnik'], ['Software Manager', 'Irfan Sayad']]);

console.log(fieldVisionDevTeam);


/*
Maps are an iterable data type, which means we can check
them for their length, but using the `size` property.
 ---------------
 */

let size = fieldVisionDevTeam.size;

console.log(`current length is ${size}`);

console.log(`
---------------
`);



/*
Maps use the `set` method to create new key-value entries, appending
them to the end of the Map.
 ---------------
 */

fieldVisionDevTeam.set('Lead Front End', 'Don Trott');

size = fieldVisionDevTeam.size;

console.log(`after adding a software manager, current length is ${size}`);

console.log(`
---------------
`);



/*
Entries can be overwritten using the `set` method.
 ---------------
 */

fieldVisionDevTeam.set('Software Manager', 'Derek Overby');

console.log(`After changing the software manager:`);
console.log(fieldVisionDevTeam);

console.log(`
---------------
`);


/*
Maps also have a `has` method, which lets us know if a specific key has been
set within a map
 ---------------
 */

if(!fieldVisionDevTeam.has('UX Lead')) {

    fieldVisionDevTeam.set('UX Lead', 'Amanda Pate');

}

size = fieldVisionDevTeam.size;

console.log(`after adding a UX lead, current length is ${size}`);

console.log(`
---------------
`);



/*
If we want to pull a value from a map, we use the `get` method
 ---------------
 */

let uxLead = fieldVisionDevTeam.get('UX Lead');

console.log(`${uxLead} is a rockstar of UX`);

console.log(`
---------------
`);



/*
Maps have built-in methods for getting both keys, and values, which
return iterable objects that are looped over with a for...of loop
 ---------------
 */

fieldVisionDevTeam.set('QA', 'Janet Genusa');

let teamString = `So far we've filled the following positions:`;

for(let key of fieldVisionDevTeam.keys()) {
    teamString += `
    - ${key}`;
}

console.log(teamString);

let peopleString = `People on our team:`;

for(let key of fieldVisionDevTeam.values()) {
    peopleString += `
    - ${key}`;
}

console.log(peopleString);

console.log(`
---------------
`);



/*
We can also loop over the iterable returned by the `entries` method,
the values of which are arrays with a key and item as its two values
 ---------------
 */

fieldVisionDevTeam.set('TPM', 'Christina Murphy');

for(let [key, value] of fieldVisionDevTeam.entries()) {

    console.log(`${value} is our rockstar ${key}`);

}

console.log(`
---------------
`);



/*
Alternatively, we can use the `forEach` method, which takes a callback
with three args: the value of the iterated item, the key, and the map
being iterated over
 ---------------
 */

fieldVisionDevTeam.set('Lead Developer', 'Ben Manuel');

fieldVisionDevTeam.forEach((value, key) => {

    console.log(`${value} is our rockstar ${key}`);

});

console.log(`
---------------
`);



/*
Finally, we can remove individual entries with the `delete` method,
or clear the entire map with the `clear` method
 ---------------
 */

fieldVisionDevTeam.delete('Lead Developer');

fieldVisionDevTeam.set('Build Manager', 'Ben Manuel');

console.log(`Lead Developer: ${fieldVisionDevTeam.get('Lead Developer')}`);
console.log(`Build Manager: ${fieldVisionDevTeam.get('Build Manager')}`);

fieldVisionDevTeam.clear();

size = fieldVisionDevTeam.size;

console.log(`after clearing, current length is ${size}`);