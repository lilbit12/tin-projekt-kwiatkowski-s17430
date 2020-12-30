const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Player = sequelize.define('Player', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    ingameName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    guildRank: {
        type: Sequelize.ENUM('MEMBER','OFFICER','GUILD MASTER'),
        allowNull: false
    },
    actualClass: {
        type:Sequelize.ENUM('MAGE','WARLOCK','DRUID','SHAMAN','WARRIOR','ROGUE', 'PALADIN', 'PRIEST'),
        allowNull: false
    },
    gearScore: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Player;