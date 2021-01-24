const PlayerRepository = require('../repository/sequelize/PlayerRepository');
const authUtil = require('../util/authUtils');

exports.login = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    PlayerRepository.findByEmail(email)
        .then(player => {
            if(!player) {
                res.render('index', {
                    navLocation: '',
                    loginError: "Wrong email or password."
                })
            } else if(authUtil.comparePasswords(password, player.password) === true) {
                req.session.loggedUser = player;
                res.redirect('/');
            } else {
                res.render('index', {
                    navLocation: '',
                    loginError: "Wrong email or password."
                })
            }
        })
        .catch(err => {
            console.log(err);
        });

}

exports.logout = (req, res, next) => {
    req.session.loggedUser = undefined;
    res.redirect('/');
}