const Player = require("../../model/sequelize/Player");
const Signup = require("../../model/sequelize/Signup");
const Raid = require("../../model/sequelize/Raid");

exports.getSingups = () => {
    return Signup.findAll();
}

exports.getSignupsNyId= (signupId) => {
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

exports.createSignup = (data) => {
    console.log(JSON.stringify(data));


    return Signup.create({
        pl_id: data.pl_id,
        raid_id: data.raid_id,
        role: data.role,
        signupDate: data.getDate(),
        signupNote: data.signupNote

    });
};

exports.updateSignup = (signupId, data) => {
    return Signup.update(data, {where: {_id: signupId}});
};


exports.deleteSignup = (signupId) => {
    return Signup.destroy({
        where: {_id: signupId}
    });
};

exports.deleteManySignups = (signupIds) => {
    return Signup.find({ _id: {[Sequelize.Op.in]: signupIds}})
}