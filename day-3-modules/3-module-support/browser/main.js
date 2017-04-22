/*
 An unfortunate lack of browser support...
 */

import { setStrings } from './service.js';

let container = document.getElementById('container');

setStrings(container, 'h2', 'p', 'pre');
