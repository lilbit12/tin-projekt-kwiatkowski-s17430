const Sequelize = require('sequelize');

const sequelize = new Sequelize('tin-s17430-sequelize', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;