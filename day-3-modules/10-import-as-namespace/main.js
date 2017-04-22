/*
 This file shows how we can import functionality under a specific namespace, so as not to conflict with other
 imported functionality.
 */

import * as h2 from './service-h2.js';
import * as p from './service-p.js';
import * as pre from './service-pre.js';

let container = document.getElementById('container');

h2.setString(container);
p.setString(container);
pre.setString(container);