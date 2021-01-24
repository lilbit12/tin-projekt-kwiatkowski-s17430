const PlayerRepository = require('../repository/sequelize/PlayerRepository');

exports.showPlayerList = (req, res, next) => {
    PlayerRepository.getPlayers()
        .then(players => {
            res.render('pages/player/list', {
                players: players,
                pageTitle: 'List  of all players',
                navLocation: 'players'
            });
        });
};


exports.showAddPlayerForm = (req, res, next) => {
    res.render('pages/player/form', {
        player: {},
        pageTitle: 'New player',
        formMode: 'createNew',
        btnLabel: 'Add Player',
        formAction: '/players/add',
        navLocation: 'players',
        validationErrors: []
    });
};

exports.showEditPlayerForm = (req, res, next) => {
    const playerId = req.params.playerId;
    PlayerRepository.getPlayerById(playerId)
        .then(player => {
            res.render('pages/player/form', {
                player: player,
                formMode: 'edit',
                pageTitle: 'Edit player',
                btnLabel: 'Edit player',
                formAction: '/players/edit',
                navLocation: 'players',
                validationErrors: []
            });
        });
};

exports.showPlayerDetails = (req, res, next) => {
    const playerId = req.params.playerId;
    PlayerRepository.getPlayerById(playerId)
        .then(player => {
            res.render('pages/player/form', {
                player: player,
                formMode: 'showDetails',
                pageTitle: 'Player details',
                formAction: '',
                navLocation: 'players',
                validationErrors: []
            });
        });
};



exports.addPlayer = (req, res, next) => {


    const playerData = { ...req.body };
    PlayerRepository.createPlayer(playerData)
        .then( result => {
            res.redirect('/players');
        })
        .catch(err => {
            err.errors.forEach(e => {
                if(e.path.includes('email') && e.type == 'unique violation') {
                    e.message = "Given email address is already taken.";
                }
            });
            res.render('pages/player/form', {
                player: playerData,
                pageTitle: 'Adding player.',
                formMode: 'createNew',
                btnLabel: 'Add player',
                formAction: '/players/add',
                navLocation: 'players',
                validationErrors: err.errors
            });
        });
};



exports.updatePlayer = (req, res, next) => {
    const playerId = req.body._id;
    const playerData = { ...req.body };
    PlayerRepository.updatePlayer(playerId, playerData)
        .then( result => {
            res.redirect('/players');
        });
};

exports.deletePlayer = (req, res, next) => {
    const playerId = req.params.playerId;
    PlayerRepository.deletePlayer(playerId)
        .then( () => {
            res.redirect('/players');
        });
};