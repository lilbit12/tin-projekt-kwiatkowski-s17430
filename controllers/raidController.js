const RaidRepository = require('../repository/sequelize/RaidRepository');


/*exports.showRaidList = (req, res, next) => {
    res.render('pages/raid/list', {navLocation: 'raids'});
}*/

exports.showRaidList = (req, res, next) => {
    RaidRepository.getRaids()
        .then(raids => {
            res.render('pages/raid/list', {
                raids: raids,
                navLocation: 'raids'
            });
        });
};



exports.showAddRaidForm = (req, res, next) => {
    res.render('pages/raid/form', {});
}

