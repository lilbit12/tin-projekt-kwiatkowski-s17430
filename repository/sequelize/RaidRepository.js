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
    return Raid.findByPk( raidId);
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

/*

exports.updatePlayer = (playerId, playerData) => {

    const ingameName = playerData.ingameName;
    const email = playerData.email;
    const guildRank = playerData.guildRank;
    const actualClass = playerData.actualClass;
    const gearScore = playerData.gearScore;

    return Player.update(playerData, {where: {_id: playerId}});
};


exports.deletePlayer = (playerId) => {
    return Player.destroy({
        where: {_id: playerId}
    });
};*/
