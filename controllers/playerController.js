exports.showPlayerList = (req, res, next) => {
    res.render('pages/player/list', {navLocation: 'players'});
}