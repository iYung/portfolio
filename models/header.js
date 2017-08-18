var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var HeaderSchema   = new Schema({
    text: String
});

module.exports = mongoose.model('Header', HeaderSchema);