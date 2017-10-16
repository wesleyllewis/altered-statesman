var keystone = require('keystone');

exports = module.exports = function(req, res) {
    var view = new keystone.View(req, res);
    var locals = res.locals;

    //set locals
    locals.section = 'albums';
    locals.filters = {
        album: req.params.album
    }
    locals.data = {
        albums: []
    }

    view.on('init', function(next) {
        var q = keystone.list('Album').model.findOne({
            slug: locals.filters.album
        });

        q.exec(function(err, result) {
            locals.data.album = result;
            next(err);
        });
    });

    view.render('album');
}