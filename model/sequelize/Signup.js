const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Signup = sequelize.define('Signup', {
    _id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    role: {
        type: Sequelize.ENUM('DPS', 'TANK', 'HEALER'),
        allowNull: false
    },
    signupDate:{
        type: Sequelize.DATE,
        allowNull:false
    },
    signupNote: {
        type: Sequelize.STRING
    },
    pl_id: {
        type: Sequelize.INTEGER,
        allowNull:false
    },
    raid_id:{
        type: Sequelize.INTEGER,
        allowNull:false
    }
});

module.exports = Signup;