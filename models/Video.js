var keystone = require('keystone');
var Types = keystone.Field.Types;

var Video = new keystone.List('Video', {
    map: { name: 'title' },
    singular: 'Video',
    plural: 'Videos',
    autokey: { path: 'slug', from: 'title', unique: true, }
});

Video.add({
    title: { type: String, required: true },
    webAddress: { type: String },
    description: { type: Types.Html, wysiwyg: true, height: 300 },
    image: { type: Types.CloudinaryImage },
    publishedDate: { type: Date, default: Date.now }
});

Video.register();