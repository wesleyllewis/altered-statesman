var keystone = require('keystone');

exports = module.exports = function(req, res) {
    var view = new keystone.View(req, res);
    var locals = res.locals;

    //set locals
    locals.section = 'shows';
    locals.filters = {
        show: req.params.show
    }
    locals.data = {
        shows: []
    }

    view.on('init', function(next) {
        var q = keystone.list('Show').model.findOne({
            slug: locals.filters.show
        });

        q.exec(function(err, result) {
            locals.data.show = result;
            next(err);
        });
    });

    view.render('show');
}