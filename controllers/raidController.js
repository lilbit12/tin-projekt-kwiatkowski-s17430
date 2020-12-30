exports.showRaidList = (req, res, next) => {
    res.render('pages/raid/raids', {navLocation: 'raids'});
}

exports.showAddRaidForm = (req, res, next) => {
    res.render('pages/raid/form', {});
}

