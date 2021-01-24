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
        allowNull: false,
        validate: {
            isIn: {
                args: [['BWL', 'NAXX', 'MC']],
                msg: "You need to choose raid."
            }
        }
    },
    raidDate: {
        type:Sequelize.DATE,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Field is required."
            }
        }
    },
    raidDescription: {
        type: Sequelize.STRING
    },
    raidSpots: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    requirements: {
        type: Sequelize.STRING,
        validate: {
            len: {
                args: [0,100],
                msg: "String length is not in this range"
            }
        }

    },
    raidNote:{
        type: Sequelize.STRING,
        validate: {
            len: {
                args: [0,250],
                msg: "String length is not in this range"
            }
        }
    },
});

module.exports = Raid;