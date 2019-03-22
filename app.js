

//1. Regular Node Js Shenanigans
const express = require('express')
const stripe = require('stripe')('sk_test_oIyaMinMOmn0cOtmF1DZ2LYD00DrVckf8F')
const bodyParser = require('body-parser')
const exphbs = require ('express-handlebars')

const app = express()

//Handlebars Middleware
/*Note to self: Handlebars provides the power necessary to let you build 
semantic templates effectively with no frustration.
A handlebars expression is a {{, some contents, followed by a }} in the html*/

app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');


//Body parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Set static folder
app.use(express.static(`${__dirname}/public`))

//Index route
app.get('/', (req,res) =>{
    res.render('index');
})

const port = process.env.PORT || 5000;

app.listen(port, () =>{

    console.log(`Server started on port ${port}`)
});