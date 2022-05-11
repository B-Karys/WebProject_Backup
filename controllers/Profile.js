const ProfileModel = require('../model/profile')

exports.create = async (req, res) => {
    if (!req.body.rank && !req.body.role) {
        res.status(400).send({message: "Content can not be empty!"});
    }

    const user = new ProfileModel({
        rank: req.body.rank,
        role: req.body.role,
    });
}

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