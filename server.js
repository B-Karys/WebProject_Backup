const express = require('express'),
    router = express.Router()
const app = express();
const path = require('path');
const port = 3002;

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