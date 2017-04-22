/*
 Here, we've set up three related files to be imported through a barrel, and run an import on the contents of
 that barrel.  Barrels help organize exports into a single pipeline, so that they can be more easily imported,
 while still enforcing the rule of 'do one thing, do it well' by giving each export its own file.
 */

import { setH2, setP, setPre } from './service-files/index.js';

let container = document.getElementById('container');

setH2(container);
setP(container);
setPre(container);