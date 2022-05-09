var mongoose = require('mongoose');
var schema = new mongoose.Schema({

    role: {
        type: String,
        default: ''
    },
    rank: {
        type: String,
        default: ''
    },
});

var user = new mongoose.model('Profile', schema);


//status searches for team || role   rank//
module.exports = user;