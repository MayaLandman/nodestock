const express = require('express')
const app = express()
const path = require('path');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 5000;


app.engine('handlebars', require('exphbs'));
app.set('view engine', 'handlebars');

const pliz = "pliz taavod"


app.get('/', (req, res) => {
    res.render('home', {
        stuff : pliz
    });
});





app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => console.log("Server Listening on port - " + PORT));