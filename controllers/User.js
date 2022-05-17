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

    if (!req.body.nickname || !req.body.role || !req.body.rank) {
        //res.status(400).send({ message: "Content can not be empty!" });
        res.status(400).render('profile', {mydata: "Data to update can not be empty!"})
        return
    }

    //const email = req.params.email;
    const query = req.body.nickname;

    //await UserModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
    await UserModel.findOneAndUpdate({nickname: query}, {
        role:req.body.role,
        rank:req.body.rank
    }).then(data => {
        console.log(data)
        if (!data) {
            //res.status(404).send({message: `User not found.`});
            res.status(404).render('profile', {mydata: `User not found.`})
        }else{
            //res.send({ message: "User updated successfully." })
            res.status(200).render('profile', {mydata: "User updated successfully."})
        }
    }).catch(err => {
        //res.status(500).send({message: err.message});
        res.status(500).render('profile', {mydata: err.message})
    });
};