var keystone = require('keystone');
var Types = keystone.Field.Types;

var Band = new keystone.List('Band', {
    map: { name: 'title' },
    singular: 'Band',
    plural: 'Bands',
    autokey: { path: 'slug', from: 'title', unique: true, }
});

Band.add({
    title: { type: String, required: true },
    description: { type: Types.Html, wysiwyg: true, height: 300 },
    image: { type: Types.CloudinaryImage },
    publishedDate: { type: Date, default: Date.now }
});

Band.register();