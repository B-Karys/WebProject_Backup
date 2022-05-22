let mongoose = require('mongoose');
let schema = new mongoose.Schema({
    name: {
        type: String,
        default: ''
    },
    players: [String],
    full: {
        type: Boolean,
    },


});


let team = new mongoose.model('Team', schema);

module.exports = team;