exports.showSignupsList = (req, res, next) => {
    res.render('pages/signups/list', {navLocation: 'signups'});
}
