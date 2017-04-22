/*
 In this example we pull in multiple named exports from the same file.
 */

import { setH2, setP, setPre } from './service.js';

let container = document.getElementById('container');

setH2(container);
setP(container);
setPre(container);