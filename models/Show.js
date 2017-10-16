var keystone = require('keystone');
var Types = keystone.Field.Types;

var Show = new keystone.List('Show', {
    map: { name: 'title' },
    singular: 'Show',
    plural: 'Shows',
    autokey: { path: 'slug', from: 'title', unique: true, }
});

Show.add({
    title: { type: String, required: true },
    date: { type: Types.Date, default: Date.now },
    time: { type: String },
    location: { type: String },
    description: { type: Types.Html, wysiwyg: true, height: 300 },
    image: { type: Types.CloudinaryImage },
    publishedDate: { type: Date, default: Date.now }
});

Show.register();