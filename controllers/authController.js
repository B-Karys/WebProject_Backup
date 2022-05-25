const express = require("express");
const UserModel = require("../model/user");
const router = express.Router();
const bcrypt = require("bcrypt");
const {genSaltSync} = require("bcrypt");

module.exports.getRegister = async function (req, res) {
    res.render('register.ejs');
};

module.exports.register = async function (req, res){
    try {
        const salt = bcrypt.genSaltSync(10);
        const password = req.body.password;
        const user = new UserModel({
            email: req.body.email,
            nickname: req.body.nickname,
            rank: req.body.rank,
            role: req.body.role,
            password: bcrypt.hashSync(password, salt)
        });
        user.save();
        res.redirect('/');
    } catch {
        res.redirect('/auth/register');
    }
};

