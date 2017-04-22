/*
 Using the browser polyfill, we can import modules through a `src` tag, so that we don't have to define out
 main entry point in the markup.
 */

import { setStrings } from './service.js';

let container = document.getElementById('container');

setStrings(container, 'h2', 'p', 'pre');