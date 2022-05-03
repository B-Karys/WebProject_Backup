//IMPORTING//
const express = require('express'),
    router = express.Router()
const app = express();
const path = require('path');
const port = 3002;
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

//DataBase//
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Databse Connected Successfully!!");
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});
//USER//
const UserRoute = require('./routes/User.js')
app.use('/user',UserRoute)

//VIEWS//
app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'))
router.get('', (req, res) => {
    res.render('', {text: "About the page"})
})

//ROOTS//
app.use('/', require("./routes/index"));
app.use('/', require("./routes/players"));
app.use('/', require("./routes/teams"));
app.use('/', require("./routes/profile"));
app.use('/', require("./routes/news"));


//CONSOLE LISTEN//
app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`+`/index`)
);