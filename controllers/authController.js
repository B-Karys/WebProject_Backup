const express = require("express");
const UserModel = require("../model/user");
const path = require('path');
const router = express.Router();
const bcrypt = require("bcrypt");
const {genSaltSync} = require("bcrypt");

module.exports.getRegister = async function (req, res) {
    res.render('register.ejs');
};

module.exports.getLogin = async function (req, res) {
    res.render('login.ejs');
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

exports.login = async (req, res) => {
    const {email, password} = req.body
    const user = await UserModel.findOne({email: email}).lean()
    if (!user) {
        return res.json({status:'error', error:"Invalid email/password"})
    }

    if (await bcrypt.compare(password, user.password)) {
        const token = {
            id: user._id,
            email: user.email,
            password: user.password
        }
        return res.redirect('/');
    }

    res.json({status:'error', error:"Invalid email/password"})
}
