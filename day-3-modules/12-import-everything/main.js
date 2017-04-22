/*
 In this file, we've taken the contents of `service.js` and imported them into the DOM directly, so that they
 can be evaluated as-is by the JS engine.
 */

import './service.js';

/*
 Note that because of the scoping of modules, nothing that's defined within the imported module code is
 available outside of that module, even in the module that runs the `import` statement.
 */

//let container = document.getElementById('container');
//
//setStrings(container, 'h2', 'p', 'pre');