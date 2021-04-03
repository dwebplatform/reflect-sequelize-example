module.exports = (app) => {

  const router = require('express').Router();
  // const subwayConytoller = require('../controller/subwayController');
  const { controllerContainer } = require('../injections/index');
  const subwayController = controllerContainer.subwayController;
  (async () => {
    console.log('x : ', subwayController.getFoo);
  })()
  router.get('/', subwayController.getFoo);
  app.use('/subways', router);
}