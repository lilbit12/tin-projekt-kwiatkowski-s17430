const Player = require("../../model/sequelize/Player");
const Signup = require("../../model/sequelize/Signup");
const Raid = require("../../model/sequelize/Raid");

exports.getSingups = () => {
    return Signup.findAll( {
        include: [{
            model: Player,
            as: 'player'
        }, {
            model: Raid,
            as: 'raid'
        }]
    });
};

exports.getSignupsById = (signupId) => {
    return Signup.findByPk(signupId,
        {
            include: [{
                model: Player,
                as: 'player',
                include: [{
                    model: Raid,
                    as: 'raid'
                }]
            }]
        });
};

exports.getSignupsByRaidId = (raidId) => {
    return Signup.findAll({
        where:
            {raid_id: raidId},
                include: [{
                    model: Player,
                    as: 'player'
                }, {
                    model: Raid,
                    as: 'raid'
                    }]
    });
};



exports.createSignup = (data) => {
    console.log(JSON.stringify(data));


    return Signup.create({
        pl_id: data.pl_id,
        raid_id: data.raid_id,
        role: data.role,
        signupDate: data.signupDate,
        signupNote: data.signupNote

    });
};

exports.updateSignup = (signupId, data) => {
    return Signup.update(data, {where: {_id: signupId}});
};


exports.deleteSignup = (signId) => {
    return Signup.destroy({
        where: {_id: signId}
    });
};

exports.deleteManySignups = (signupIds) => {
    return Signup.find({ _id: {[Sequelize.Op.in]: signupIds}})
}