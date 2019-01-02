const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    'C:\\Users\\Julian\\Documents\\Proyectos\\es6-node-template\\public\\microA\\runtime.js',
    'C:\\Users\\Julian\\Documents\\Proyectos\\es6-node-template\\public\\microA\\polyfills.js',
    'C:\\Users\\Julian\\Documents\\Proyectos\\es6-node-template\\public\\microA\\main.js'
  ];

  await fs.ensureDir('C:\\Users\\Julian\\Documents\\Proyectos\\es6-node-template\\public\\microA\\elements');
  await concat(files, 'C:\\Users\\Julian\\Documents\\Proyectos\\es6-node-template\\public\\microA\\elements\\button-test.js');
})();
