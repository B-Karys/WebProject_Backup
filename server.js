const express = require('express'),
    router = express.Router()
const app = express();
const path = require("path");
const port = 3001;
const mongoose = require('mongoose');
const config = require('config');

const dbConfig = config.get('Kelphy.dbConfig.dbName');

mongoose.connect(dbConfig,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{
    console.log('Database Connected');
}).catch(err=>{
    console.log('Database not connected'+err)
});

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'))


router.get('', (req, res) => {
    res.render('', {text: "About the page"})
})

app.use('/', require("./routes/index"));
app.use('/', require("./routes/players"));
app.use('/', require("./routes/teams"));
app.use('/', require("./routes/profile"));
app.use('/', require("./routes/news"));

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`+`/index`)
);