
const _ = require('lodash');
const filepaths = require('filepaths');
const path = require('path')
const serviceFiles = filepaths.getSync(path.join(__dirname, '../services'));
const controllerFiles = filepaths.getSync(path.join(__dirname, '../controller'));
const db = require('../models');

const serviceDependency = { db };
function createServiceContainer(dependecyContainer) {
  const injectionContainer = {};
  serviceFiles.forEach(serviceFileName => {
    const serviceName = path.basename(serviceFileName).split('.')[0];
    const serviceConstructor = require(path.join(__dirname, `../services/${serviceName}.js`));
    injectionContainer[serviceName] = Reflect.construct(serviceConstructor, [dependecyContainer]);
  });
  return injectionContainer;
}
function createControllerContainer(controllerDependency) {
  const controllerContainer = {};
  controllerFiles.forEach(controllerFileName => {
    const controllerName = path.basename(controllerFileName).split('.')[0];
    const controllerConstructor = require(path.join(__dirname, `../controller/${controllerName}.js`));
    const serviceDependency = createServiceContainer({ db });
    controllerContainer[controllerName] = Reflect.construct(controllerConstructor, [{ db, ...serviceDependency, }]);
  });
  return controllerContainer;
}
const memoized = _.memoize(createServiceContainer);
const memoizedController = _.memoize(createControllerContainer);
module.exports = { injectionContainer: memoized(serviceDependency), controllerContainer: memoizedController(serviceDependency) };