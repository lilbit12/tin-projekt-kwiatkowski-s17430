const Player = require("../../model/sequelize/Player");
const Signup = require("../../model/sequelize/Signup");
const Raid = require("../../model/sequelize/Raid");

exports.getPlayers = () => {
    return Player.findAll();
};

exports.getPlayerById = (playerId) => {
    return Player.findByPk(playerId,
        {
            include: [{
                model: Signup,
                as: 'signups',
                include: [{
                    model: Raid,
                    as: 'raid'
                }]
            }]
        });
};


exports.createPlayer = (newPlayerData) => {
    return Player.create({
        ingameName: newPlayerData.ingameName,
        email: newPlayerData.email,
        guildRank: newPlayerData.guildRank,
        actualClass: newPlayerData.actualClass,
        gearScore: newPlayerData.gearScore
    });
};

exports.findByEmail = (email) => {
    return Player.findOne({
        where: {email: email}
    });
};

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
};