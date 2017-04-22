/*
 This time, instead of exporting a default set of functionality, we've exported a specific named set of
 functionality.  The name used in the import statement has to match the export, as JS needs to know which
 export you're referencing in case there are multiple named exports.
 */

import { setStrings } from './service.js';

let container = document.getElementById('container');

setStrings(container, 'h2', 'p', 'pre');