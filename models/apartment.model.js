module.exports = (sequelize, Sequelize) => {
  const Apartment = sequelize.define('apartments', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: Sequelize.TEXT,
    },
    description: {
      type: Sequelize.TEXT
    },
    price: {
      type: Sequelize.INTEGER
    },
    maxPersonAmount: {
      type: Sequelize.INTEGER
    },
    images: {
      type: Sequelize.TEXT
    }
  });
  return Apartment;
}