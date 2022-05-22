const TeamsModel = require('../model/team')

exports.team = async function (req, res) {
    res.render("teams.ejs", {mydata:req.user})
}
//CREATE//
exports.create = async (req, res) => {
    if (!req.body.name) {
        res.status(400).send({message: "Content can not be empty!"});
    }

    const teams = new TeamsModel({
        name: req.body.name,
        players: req.body.players,
    });

    await teams.save();
};


exports.findAll = async (req, res) => {
    try {
        const teams = await TeamsModel.find();
        res.status(200).json(teams);
        // res.status(200).render('teams', {mydata: teams})
    } catch(error) {
        res.status(404).render('teams', {mydata: error.message})
        //res.status(404).json({message: error.message});
    }
};

exports.addPlayer = async (req,res) => {
    try {
        const newPlayer = TeamsModel.findOne({}).populate('user').exec((err, req.body.nickname));
        $push: {
           players: newPlayer;
        }
    } catch (error) {
        res.status(404).render('teams', {mydata: error.message})
    }
};


