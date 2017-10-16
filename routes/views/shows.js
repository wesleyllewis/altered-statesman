var keystone = require('keystone');

exports = module.exports = function(req, res) {
    var view = new keystone.View(req, res);
    var locals = res.locals;

    //set locals
    locals.section = 'shows';

    //Load Shows
    view.query('shows', keystone.list('Show').model.find());

    view.render('shows');
}