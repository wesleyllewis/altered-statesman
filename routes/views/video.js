var keystone = require('keystone');

exports = module.exports = function(req, res) {
    var view = new keystone.View(req, res);
    var locals = res.locals;

    //set locals
    locals.section = 'videos';
    locals.filters = {
        video: req.params.video
    }
    locals.data = {
        videos: []
    }

    view.on('init', function(next) {
        var q = keystone.list('Video').model.findOne({
            slug: locals.filters.video
        });

        q.exec(function(err, result) {
            locals.data.video = result;
            next(err);
        });
    });

    view.render('video');
}