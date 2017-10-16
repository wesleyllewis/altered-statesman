var keystone = require('keystone');

exports = module.exports = function(req, res) {
    var view = new keystone.View(req, res);
    var locals = res.locals;

    //set locals
    locals.section = 'albums';

    //Load Albums
    view.query('albums', keystone.list('Album').model.find());

    view.render('albums');
}