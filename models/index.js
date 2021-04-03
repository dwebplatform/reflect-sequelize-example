// const dbConfig = require("../config/db.config");
const filepaths = require('filepaths');
const Sequelize = require("sequelize");
const dbConfig = {
  DB: 'data_base_for_tokens',
  USER: 'root',
  PASSWORD: '',
}
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
let routes = filepaths.getSync('./models');
for (let path of routes) {// перебор по роутам, чтобы не нужно было писать require('./testModel.model.js")(sequelize,Sequelize);
  try {
    let [main, sub] = path.split('\\');
    if (sub === 'index.js') {
      continue;
    } else {
      let [name, model, ext] = sub.split('.');
      db[`${name}s`] = require(`./${name}.${model}.${ext}`)(sequelize, Sequelize);
    }
  } catch (e) {
    console.warn({ e })
  }

}

module.exports = db;