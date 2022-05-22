const TeamModel = require('../model/team')
// Create and Save a new team

//CREATE//
exports.create = async (req, res) => {
    if (!req.body.name && !req.body.players && !req.body.full) {
        res.status(400).send({message: "Content can not be empty!"});
    }

    const team = new TeamModel({
        name: req.body.name,
        players: req.body.players,
        full: req.body.full,
    });
};


exports.findAll = async (req, res) => {
    try {
        const teams = await TeamModel.find();
        res.status(200).json(user);
        // res.status(200).render('teams', {mydata: teams})
    } catch(error) {
        res.status(404).render('team', {mydata: error.message})
        //res.status(404).json({message: error.message});
    }
};

exports.addPlayer = async (req,res) => {
    try {
        const newPlayer = TeamModel.findOne({}).populate('user').exec((err, req.body.nickname));
        $push: {
           players: newPlayer;
        }
    } catch (error) {
        res.status(404).render('teams', {mydata: error.message})
    }
};


