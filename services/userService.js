class UserService {
  constructor({ db }) {
    this.db = db;
  }
  async getAllUsers() {
    const users = await this.db.users.findAll();
    return users;
  }
}

module.exports = UserService;