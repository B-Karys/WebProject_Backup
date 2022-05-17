const UserModel = require('../model/user')// Create and Save a new user
exports.create = async (req, res) => {
    if (!req.body.email && !req.body.nickname && !req.body.password) {
        res.status(400).send({ message: "Content can not be empty!" });
    }

    const user = new UserModel({
        email: req.body.email,
        nickname: req.body.nickname,
        password: req.body.password,
        rank: req.body.rank,
        role: req.body.role,
    });

    await user.save().then(data => {
        res.redirect("/profile")
        });
};

exports.update = async (req, res) => {

    if (!req.body.role || !req.body.rank) {
        //res.status(400).send({ message: "Content can not be empty!" });
        res.status(400).render('profile', {mydata: "Data to update can not be empty!"})
        return
    }

    const query = req.body.nickname;

    await UserModel.findOneAndUpdate({email: query}, {
        rank:req.body.rank,
        role:req.body.role
    }).then(data => {
        console.log(data)
        if (!data) {
            //res.status(404).send({message: `User not found.`});
            res.status(404).render('results', {mydata: `User not found.`})
        }else{
            //res.send({ message: "User updated successfully." })
            res.render('results', {mydata: "User updated successfully."})
        }
    }).catch(err => {
        //res.status(500).send({message: err.message});
        res.status(500).render('results', {mydata: err.message})
    });
};