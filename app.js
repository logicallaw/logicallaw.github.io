const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const nunjucks = require('nunjucks');
const morgan = require('morgan');
const path = require('path');

dotenv.config();

const app = express();

//view engine : nunjucks
app.set('port', process.env.PORT || 8001);
app.set('view engine', 'html');

nunjucks.configure('views',{
    express:app,
    watch:true
})
app.use(morgan('dev'));

//
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave:false,
    saveUninitialized:false,
    secret:process.env.COOKIE_SECRET,
    cookie:{
        httpOnly:true,
        secure:false,
    }
}))

app.get('/',(req,res)=>{
    res.render('main',{title:'logicallaw - github.io'});
})

module.exports = app;
