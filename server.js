//IMPORTING//
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3002;
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const router = require("./routes");
const swaggerUi = require("swagger-ui-express");
swaggerDocument = require('./swagger.json');


//DataBase//
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(methodOverride('_method'))
mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url).then(() => {
    console.log("Database Connected Successfully!!");
}).catch(err => {
    console.log('Could not connect to the database', err);
});



//USER//
const UserRoute = require('./routes/user.js')
app.use('/user',UserRoute)
const TeamRoute = require('./routes/teams.js')
app.use('/teams',TeamRoute)
//VIEWS//
app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'))


//ROOTS//
app.use('/', require("./routes/index"));
app.use('/players', require("./routes/players"));
app.use('/teams', require("./routes/teams"));
app.use('/profile', require("./routes/profile"));
app.use('/news', require("./routes/news"));
app.use('/auth', require("./routes/auth"));


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//CONSOLE LISTEN//
app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);