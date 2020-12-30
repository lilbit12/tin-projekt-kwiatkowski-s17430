const sequelize = require('./sequelize');

const Player = require('../../model/sequelize/Player');
const Raid = require('../../model/sequelize/Raid');
const Signup = require('../../model/sequelize/Signup');



module.exports = () => {
    Player.hasMany(Signup, {as: 'signups', foreignKey: {name: 'pl_id', allowNull: false},  constraints: true, onDelete: 'CASCADE'});
    Signup.belongsTo(Player, {as: 'player', foreignKey: {name: 'pl_id', allowNull: false}});
    Raid.hasMany(Signup, {as: 'signups', foreignKey:{name:'raid_id', allowNull: false}, constraints:true, onDelete:'CASCADE'});
    Signup.belongsTo(Raid, {as: 'raid', foreignKey: {name: 'raid_id', allowNull: false}});

    let allPls, allRaids;
    return sequelize
        .sync({force:true})
        .then( () => {
            return Player.findAll();
        })
        .then( plrs => {
            if(!plrs || plrs.length == 0){
                return Player.bulkCreate([
                    {ingameName: 'Grimaxe', email: 'test123@gmail.com',guildRank: "MEMBER", actualClass: 'WARRIOR', gearScore: 75},
                    {ingameName: 'Knuti', email: 'knutis@gmail.com',guildRank: "OFFICER", actualClass: 'ROGUE', gearScore: 77},
                    {ingameName: 'Bearhug', email: 'bh@gmail.com', guildRank: "GUILD MASTER", actualClass: 'DRUID', gearScore: 80},
                ])
                    .then( () => {
                        return Player.findAll();
                    });
            } else  {
                return plrs;
            }
        })
        .then
        ( plrs => {
            allPls = plrs;
            return Raid.findAll();
        })
        .then( raids => {
            if (!raids || raids.length == 0) {
                return Raid.bulkCreate([
                    {
                        instanceName: "MC",
                        raidDate: '2020-12-29 19:00:00',
                        raidDescription: null,
                        raidSpots: 40,
                        requirements: null,
                        raidNote: 'invites at 18:30, summons 18:45'
                    },
                    {
                        instanceName: "BWL",
                        raidDate: '2020-12-31 12:00:00',
                        raidDescription: null,
                        raidSpots: 40,
                        requirements: null,
                        raidNote: 'invites at 11:30, summons 11:45'
                    },
                    {
                        instanceName: "NAXX",
                        raidDate: '2021-01-31 19:00:00',
                        raidDescription: null,
                        raidSpots: 40,
                        requirements: '10x Frost Resistance Potion',
                        raidNote: null
                    },
                ])
                    .then(() => {
                        return Raid.findAll();
                    });
            } else {
                return raids;
            }
        })
        .then( raids => {
            allRaids = raids;
            return Signup.findAll();
        })
        .then( sgnps => {
            if( !sgnps || sgnps.length ==0){
                return Signup.bulkCreate([
                    {pl_id: allPls[0]._id, raid_id:allRaids[0]._id, role: Signup.role = 'DPS', signupDate: '2020-12-29', signupNote: null },
                    {pl_id: allPls[1]._id, raid_id:allRaids[0]._id, role: Signup.role = 'TANK', signupDate: '2020-12-28', signupNote: null },
                    {pl_id: allPls[1]._id, raid_id:allRaids[1]._id, role: Signup.role = 'HEALER', signupDate: '2020-12-28', signupNote: null }
                ]);
            } else  {
                return sgnps;
            }
        });
};