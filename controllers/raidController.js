const RaidRepository = require('../repository/sequelize/RaidRepository');




exports.showRaidList = (req, res, next) => {
    RaidRepository.getRaids()
        .then(raids => {
            res.render('pages/raid/list', {
                raids: raids,
                navLocation: 'raids'
            });
        });
};



exports.addRaid = (req, res, next) => {
    const raidData = { ...req.body };
    RaidRepository.createRaid(raidData)
        .then( result => {
            res.redirect('/raids');
        })
        .catch(err => {
            res.render('pages/raid/form', {
                raid: raidData,
                pageTitle: 'Adding raid.',
                formMode: 'createNew',
                btnLabel: 'Add raid',
                formAction: '/raids/add',
                navLocation: 'raids',
                validationErrors: err.errors
            });
        });
};

exports.showAddRaidForm = (req, res, next) => {
    res.render('pages/raid/form', {
        raid: {},
        pageTitle: 'New raid',
        formMode: 'createNew',
        btnLabel: 'Add Raid',
        formAction: '/raids/add',
        navLocation: 'raids',
        validationErrors: []
    });
};

exports.showEditRaidForm = (req, res, next) => {
    const raidId = req.params.raidId;
    RaidRepository.getRaidById(raidId)
        .then(raid => {
            res.render('pages/raid/form', {
                raid: raid,
                formMode: 'edit',
                pageTitle: 'Edit raid',
                btnLabel: 'Edit raid',
                formAction: '/raids/edit',
                navLocation: 'raids',
                validationErrors: []
            });
        });
};

exports.updateRaid = (req, res, next) => {
    const raidId = req.body._id;
    const raidData = { ...req.body };
    RaidRepository.updateRaid(raidId, raidData)
        .then( result => {
            res.redirect('/raids');
        });
};

exports.deleteRaid = (req, res, next) => {
    const raidId = req.params.raidId;
    RaidRepository.deleteRaid(raidId)
        .then( () => {
            res.redirect('/raids');
        });
};

