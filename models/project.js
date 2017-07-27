var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ProjectSchema   = new Schema({
    name: String,
    date: String,
    text: String,
    year: String,
    image: String,
    devpost: String,
    github: String
});

module.exports = mongoose.model('Project', ProjectSchema);