/*
 This is the old way of doing things, through `script` tags that are executed in order in the DOM, each one
 building off of the previous one.  This is extremely fragile and falls apart fast, and you have to know the
 codebase very well in order to know the order in which script tags need to be added.
 */

let container = document.getElementById('container');

setStrings(container, 'h2', 'p', 'pre');