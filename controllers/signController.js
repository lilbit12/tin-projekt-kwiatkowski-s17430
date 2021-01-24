const SignupsRepository = require('../repository/sequelize/SingnupRepository');
const PlayersRepository = require('../repository/sequelize/PlayerRepository');
const RaidsRepository = require('../repository/sequelize/RaidRepository');


exports.showSignupsList = (req, res, next) => {
    SignupsRepository.getSingups()
        .then(signups => {
            res.render('pages/signup/list', {
                signups: signups,
                navLocation: 'signups'
            });
        });
};


exports.showSignupsListByRaidId = (req, res, next) => {
    const raidId = req.params.raidId;

    SignupsRepository.getSignupsByRaidId(raidId)
        .then(signups => {
            res.render('pages/signup/list', {
                signups: signups,
                navLocation: 'signups'
            });
        });
};

exports.showAddSignForm = (req, res, next) => {

    const raidId = req.params.raidId;
    let allPlrs;

    PlayersRepository.getPlayers()
        .then(players => {
            allPlrs = players;
            return  RaidsRepository.getRaidById(raidId);
        })
        .then(raid => {
            res.render('pages/signup/form', {
                signup: {},
                raid: raid,
                formMode: 'createNew',
                allPlrs: allPlrs,
                pageTitle: 'New signup',
                btnLabel: 'Add signup',
                navLocation: 'signups',
                validationErrors: []
            });
        });
};


exports.addSignup = (req, res, next) => {
    const signupData = { ...req.body };

    SignupsRepository.createSignup(signupData)
        .then( result => {
            res.redirect('/signups');
        }).catch(err => {
            res.render('pages/signup/form', {
                signup: signupData,
                pageTitle: 'Adding signup.',
                raid: signupData.raid,
                raid_id: signupData.raid_id,
                formMode: 'createNew',
                allPlrs: signupData.allPlrs,
                btnLabel: 'Add signup',
                formAction: '/signups/add/:raidId',
                navLocation: 'signups',
                validationErrors: err.errors
            });
    })
};

exports.deleteSignup = (req, res, next) => {
    const signId = req.params.signId;
    SignupsRepository.deleteSignup(signId)
        .then( () => {
            res.redirect('/signups');
        });
};



