class SubwayController {
  constructor({ db, subwayService }) {
    this.subwayService = subwayService;
    this.getFoo = this.getFoo.bind(this);
  }
  async getFoo(req, res) {
    try {
      const subways = await this.subwayService.getAllSubWays();
      return res.json({ status: 'foo', subways })

    } catch (e) {
      return res.json({ status: 'error' })
    }
  }
}

module.exports = SubwayController;