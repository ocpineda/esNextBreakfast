/*
 In the most basic sense, we've exported a specific piece of functionality as a default, meaning that it will
 be the only thing available to be imported by other files.  Note that those files can call it whatever they
 want, since the export doens't really have a name.
 */
import theExportedThing from './service.js';

let container = document.getElementById('container');

theExportedThing(container, 'h2', 'p', 'pre');