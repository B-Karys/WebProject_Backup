let mongoose = require('mongoose');
let schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        default: ' ',
    },
    players: [String],
});


let teams = new mongoose.model('Team', schema);

module.exports = teams;