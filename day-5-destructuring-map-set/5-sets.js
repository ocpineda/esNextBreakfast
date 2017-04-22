/*
In this file we'll explore Sets, which will carry unique values.
First we'll start off a set by passing values in the form of an
iterable data type.  You'll notice that Sets have the same `size`
property that Maps have.
 ---------------
 */

let frontEndTools = new Set(['Sass', 'Karma', 'Jasmine']);

console.log(frontEndTools);
console.log(`So far we have ${frontEndTools.size} front-end tools`);

console.log(`
---------------
`);



/*
If we want to insert a value, we simply apply the `add` method. This
will tack the new entry to the end of the Set
 ---------------
 */

frontEndTools.add('Webpack');

console.log(`Now we have ${frontEndTools.size} front-end tools`);

console.log(`
---------------
`);



/*
We can then view the items in the array using either the `values` method.
We could also use the `keys` method since it returns the same thing, but
that's a little less obvious.
 ---------------
 */

frontEndTools.add('TypeScript');

let toolsString = `Tools we have so far:`;

for(let tool of frontEndTools.values()) {
    toolsString += `
    - ${tool}`;
}

console.log(toolsString);

console.log(`
---------------
`);



/*
If we try to add a value again, nothing will happen.  The Set knows that
a value matching the one I'm trying to add already exists in its contents
and ignores the new entry.
 ---------------
 */

frontEndTools.add('TypeScript');

let newToolsString = `Tools we have so far:`;

for(let tool of frontEndTools.values()) {
    newToolsString += `
    - ${tool}`;
}

console.log(newToolsString);

console.log(`
---------------
`);



/*
We can always check to see if a property exists in a Set using the `has`
method, similarly to how it works in a Map.  We can also use the `forEach`
method, which will expose a function that iterates over the values.
 ---------------
 */

if(!frontEndTools.has('RxJS')) {
    console.log(`You're going to love the Observer pattern!
    `);
    frontEndTools.add('RxJS');
}

console.log('Wanna be a front-end dev?');
frontEndTools.forEach(tool => {
    console.log(`You've gotta learn ${tool}`);
});

console.log(`
---------------
`);



/*
If we wanted to, we could convert our set into an array using a built-in
Array method, which returns a fresh array without modifying the original
data object
 ---------------
 */

console.log(`As a Set:`);
console.log(frontEndTools);

console.log(`As an Array:`);
console.log(Array.from(frontEndTools));

console.log(`
---------------
`);



/*
Finally, you can either delete an entry, or clear the list entirely, the
same way we would in a Map.
 ---------------
 */

frontEndTools.clear();

console.log(`At the end of the day, we're left with ${frontEndTools.size} tools`);

