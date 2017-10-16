var keystone = require('keystone');

exports = module.exports = function(req, res) {
    var view = new keystone.View(req, res);
    var locals = res.locals;

    //set locals
    locals.section = 'bands';

    //Load Albums
    view.query('bands', keystone.list('Band').model.find());

    view.render('band');
}