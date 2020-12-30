const RaidRepository = require('../repository/sequelize/RaidRepository');

exports.getRaids = (req, res, next) => {
    RaidRepository.getRaids()
        .then(players => {
            res.status(200).json(players);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getRaidByName = (req, res, next) => {
    const raidName = req.params.raidName;
    RaidRepository.getRaidByName(raidName)
        .then(raid => {
            if(!raid) {
                res.status(404).json({
                    message: 'Raids with name: '+raidName+ ' not found'
                })
            } else {
                res.status(200).json(raid);
            }
        });
};

exports.createRaid = (req , res, next) => {
    RaidRepository.createRaid(req.body)
        .then(newObj => {
            res.status(201).json(newObj);
        })
        .catch(err => {
            if (!err.statusCode){
                err.statusCode = 500;
            }
            next(err);
        });
};
