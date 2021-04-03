module.exports = (sequelize, Sequelize) => {
  const Subway = sequelize.define('subways', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: Sequelize.TEXT
    }
  });
  return Subway;
}