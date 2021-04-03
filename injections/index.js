const filepaths = require('filepaths');
const path = require('path')
let serviceFiles = filepaths.getSync(path.join(__dirname, '../services'));
const db = require('../models');
const injectionContainer = {};
serviceFiles.forEach(serviceFileName => {
  console.log({ serviceFileName })
  console.log(path.basename(serviceFileName));
  const serviceName = path.basename(serviceFileName).split('.')[0];
  const serviceConstructor = require(path.join(__dirname, `../services/${serviceName}.js`));
  injectionContainer[serviceName] = Reflect.construct(serviceConstructor, [{ db }]);
});

module.exports = { injectionContainer };