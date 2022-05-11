const ProfileModel = require('../model/profile')

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

exports.findByRole = async (req, res) => {
    try {
        const user = await ProfileModel.find(req.params.role);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};
exports.findByRank = async (req, res) => {
    try {
        const user = await ProfileModel.find(req.params.rank);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};