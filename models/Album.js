var keystone = require('keystone');
var Types = keystone.Field.Types;

var Album = new keystone.List('Album', {
    map: { name: 'title' },
    singular: 'Album',
    plural: 'Albums',
    autokey: { path: 'slug', from: 'title', unique: true, }
});

Album.add({
    title: { type: String, required: true },
    webAddress: { type: String },
    description: { type: Types.Html, wysiwyg: true, height: 300 },
    image: { type: Types.CloudinaryImage },
    publishedDate: { type: Date, default: Date.now }
});

Album.register();