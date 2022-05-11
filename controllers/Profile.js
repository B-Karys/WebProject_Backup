const ProfileModel = require('../model/profile')// Create and Save a new user
exports.create = async (req, res) => {
    if (!req.body.rank && !req.body.role) {
        res.status(400).send({ message: "Content can not be empty!" });
    }

    const user = new ProfileModel({
        rank: req.body.rank,
        role: req.body.role,

    });

    await user.save().then(data => {
        res.send({
            message:"User created successfully!!",
            user:data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating user"
        });
    });
};