const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');



const Schema = mongoose.Schema;

const Course = new Schema(
    {
      name: {type: String, required: true, maxLength: 255},
      description: {type: String, maxLength: 600},
      image: {type: String, maxLength: 255},
      videoId: {type: String, required: true, maxLength: 255},
      level: {type: String, maxLength: 255},
      slug: {type: String, slug: 'name', unique: true},
    // slug: { type: String, slug: 'name'},
    // createdAt: { type: Date, default: Date.now },
    // updatedAt: { type: Date, default: Date.now },
    },
    {
      timestamps: true,
  },
  
);

// Add plugins
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: 'all',
  });

module.exports = mongoose.model('Course', Course);
