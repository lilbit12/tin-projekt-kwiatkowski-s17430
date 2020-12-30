const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Raid = sequelize.define('Raid', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    instanceName: {
        type: Sequelize.ENUM('BWL','NAXX','MC'),
        allowNull: false
    },
    raidDate: {
        type:Sequelize.DATE,
        allowNull: false
    },
    raidDescription: {
        type: Sequelize.STRING
    },
    raidSpots: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    requirements: {
        type: Sequelize.STRING
    },
    raidNote:{
        type: Sequelize.STRING
    },
});

module.exports = Raid;