const express = require('express')
const app = express()
const path = require('path');
const exphbs = require('express-handlebars');
const request = require('request');

const PORT = process.env.PORT || 5000;


app.engine('handlebars', require('exphbs'));
app.set('view engine', 'handlebars');

request('htps://cloud.iexapis.com/stable/stock/fb/quote?token=pk_0ab9c13fc6374b5e859fe290b19e2324', {json: true}, (err,res,nody) =>{
    if(err){return console.log(err);}
    console.log(body); 
    if(res.statusCode === 200){
        console.log(body);
    };
});
    

app.get('/', (req, res) => {
    res.render('home');
});



app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => console.log("Server Listening on port - " + PORT));