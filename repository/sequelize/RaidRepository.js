const Player = require("../../model/sequelize/Player");
const Signup = require("../../model/sequelize/Signup");
const Raid = require("../../model/sequelize/Raid");

exports.getRaids = () => {
    return Raid.findAll();
};

exports.getRaidByName = (raidName) => {
    return Raid.findAll({
            where: {
                instanceName: raidName
            }
        });
};

exports.getRaidById = (raidId) => {
    return Raid.findByPk(raidId);
};

exports.createRaid = (newRaidData) => {
    return Raid.create({
        instanceName: newRaidData.instanceName,
        raidDate: newRaidData.raidDate,
        raidDescription: newRaidData.raidDescription,
        raidSpots: newRaidData.raidSpots,
        requirements: newRaidData.requirements,
        raidNote: newRaidData.raidNote
    });
};

exports.createRaid = (newRaidData) => {
    return Raid.create({
        instanceName: newRaidData.instanceName,
        raidDate: newRaidData.raidDate,
        raidDescription: newRaidData.raidDescription,
        raidSpots: newRaidData.raidSpots,
        requirements: newRaidData.requirements,
        raidNote: newRaidData.raidNote
    });
};



exports.updateRaid = (raidId, raidData) => {

    const instanceName = raidData.ingameName;
    const raidDate = raidData.raidDate;
    const raidNote = raidData.raidNote;

    return Raid.update(raidData, {where: {_id: raidId}});
};


exports.deleteRaid = (raidId) => {
    return Raid.destroy({
        where: {_id: raidId}
    });
};

