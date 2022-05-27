const UserModel = require('../model/user')// Create and Save a new user

//CREATE//
exports.create = async (req, res) => {
    if (!req.body.email && !req.body.nickname && !req.body.password) {
        res.status(400).send({ message: "Content can not be empty!" });
    }

    const user = new UserModel({
        _id: String,
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


exports.findOne = async (req, res) => {

    try {
        const user = await UserModel.findById({_id:req.params.id}).exec();
        res.status(200).json(user);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
};

//FIND ALL//
exports.findAll = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
        // res.status(200).render('players', {mydata: user})
    } catch(error) {
        // res.status(404).render('players', {mydata: error.message})
        res.status(404).json({message: error.message});
    }
};



//UPDATE//
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
            // //res.send({ message: "User updated successfully." })
            res.status(200).render('profile', {mydata: "User updated successfully."})
        }
    }).catch(err => {
        //res.status(500).send({message: err.message});
        res.status(500).render('profile', {mydata: err.message})
    });
};

//DELETE//
exports.destroy = async (req, res) => {

    //await UserModel.findByIdAndRemove(req.params.id).then(data => {
    let userNickname=req.body.nickname
    let userPassword=req.body.password
    await UserModel.deleteOne({nickname: userNickname, password: userPassword}).then(data => {
        //await UserModel.findByIdAndRemove(req.query.id).then(data => {
        //console.log(data)
        if (data.deletedCount===0) {
            //res.status(404).send({ message: `User not found.`});
            res.status(404).render('profile', {mydata: "User not found"})

        } else {
            res.send({message: "User deleted successfully!"});
            // res.status(200).render('profile', {mydata: "user "+ userNickname +" deleted succesfully!"})
        }
    }).catch(err => {
        res.status(500).send({ message: err.message });
        // res.status(500).render('profile', {mydata: err.message})
    });
};