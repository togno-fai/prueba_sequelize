const { Sequelize } = require('sequelize');

module.exports = new Sequelize('ordenes', 'root', 'root', {
    host: 'localhost',
    dialect: 'mariadb'
});