const { injectionContainer } = require('./injections');
(async () => {
  const apartmentService = injectionContainer.apartmentService;
  const apartments = (await apartmentService.getAllApartments()).map(item => item.description);
  console.log({ apartments })
  const subwayService = injectionContainer.subwayService;
  const subways = (await subwayService.getAllSubWays()).map((item) => item.title);
  console.log({ subways })
})();