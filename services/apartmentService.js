class ApartmentService {
  constructor({ db }) {
    this.db = db;
  }
  async getAllApartments() {
    const apartments = await this.db.apartments.findAll();
    return apartments;
  }
}

module.exports = ApartmentService;