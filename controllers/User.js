const UserModel = require('../model/user')// Create and Save a new user
exports.create = async (req, res) => {
    if (!req.body.email && !req.body.nickname && !req.body.password) {
        res.status(400).send({ message: "Content can not be empty!" });
    }

    const user = new UserModel({
        email: req.body.email,
        nickname: req.body.nickname,
        password: req.body.password,
    });

    await user.save().then(data => {
        res.redirect("/profile")
        });
};