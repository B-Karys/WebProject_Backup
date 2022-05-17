let mongoose = require('mongoose');
let schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    nickname: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: ''
    },
    role: {
        type: String,
        default: ''
    },
    rank: {
        type: String,
        default: ''
    },
});

let user = new mongoose.model('User', schema);

module.exports = user;