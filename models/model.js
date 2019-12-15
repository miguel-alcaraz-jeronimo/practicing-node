const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const slugs = require('slugs');

const modelSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        require: 'Please, enter a model name.'
    },
    slug: String,
    description: {
        type: String,
        trim: true
    },
    tags: [String]
});

modelSchema.pre('save', function(next) {
    if (!this.isModified('name')) {
        next();
        return;
    }
    this.slug = slugs(this.name);
    next();
});

module.exports = mongoose.model('Model', modelSchema);