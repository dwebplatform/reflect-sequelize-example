class SubWayService {
  constructor({ db }) {
    this.db = db;
  }
  async getAllSubWays() {
    const subways = await this.db.subways.findAll();
    return subways;
  }
}

module.exports = SubWayService;