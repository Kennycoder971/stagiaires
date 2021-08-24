const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('stagiaires', 'root', 'root', {
    dialect: 'mysql'
  });

module.exports = sequelize