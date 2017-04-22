/*
 In this example using a Node polyfill, we run the main file using the `node-esml` executable, which sets up an
 extended run environment with module support.
 */

import { logStrings } from './service.js';

logStrings(
    `Modules?  We don't need no stinkin' modules!`,
    `Oh, I see.  That's kind of nice`,
    `IMPORT/EXPORT ALL THE THINGS!!!`
);
