let mongoose = require('mongoose');
let schema = new mongoose.Schema({

    role: {
        type: String,
        default: ''
    },
    rank: {
        type: String,
        default: ''
    },
});

let user = new mongoose.model('Profile', schema);


//status searches for team || role   rank//
module.exports = user;