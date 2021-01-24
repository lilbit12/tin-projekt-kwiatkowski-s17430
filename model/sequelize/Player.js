

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
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Field is required."
            }
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: {
                msg: "Field is required."
            },
            len: {
                args: [5, 60],
                msg: "Field should contain from 5 to 60 letters."
            },
            isEmail: {
                msg: 'Field should contain valid email address.'
            }
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    guildRank: {
        type: Sequelize.ENUM('MEMBER', 'OFFICER', 'GUILD MASTER'),
        allowNull: false,
        validate: {
            isIn: {
                args: [['member', 'officer', 'guild master']],
                msg: "Guild rank not chosen."
            }
        }
    },
    actualClass: {
        type: Sequelize.ENUM('MAGE', 'WARLOCK', 'DRUID', 'SHAMAN', 'WARRIOR', 'ROGUE', 'PALADIN', 'PRIEST'),
        allowNull: false,
        validate: {
            isIn: {
                args: [['MAGE', 'WARLOCK', 'DRUID', 'SHAMAN', 'WARRIOR', 'ROGUE', 'PALADIN', 'PRIEST']],
                msg: "Class not chosen."
            }
        }
    },
    gearScore: {
        type: Sequelize.INTEGER,
        validate: {
            notEmpty: {
                msg: "Field is required."
            },
            min: 30,
            max: 100,
        }
    }
});



module.exports = Player;