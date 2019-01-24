// Expresss and Database
const express = require("express");
const app = express();
const db = require('./models/')

// Passport and Dependencies
var LocalStrategy = require('passport-local').Strategy;
var passport = require('passport');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var bcrypt = require('bcryptjs');
var Sequelize = require('sequelize');
var SequelizeStore = require('connect-session-sequelize')(session.Store);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// Setup Sessions
var myStore = new SequelizeStore({
    db: db.sequelize
})

app.use(session({
    secret: 'secretpassword;',
    store: myStore,
    resave: false,
    proxy: true
}))

myStore.sync();

app.set('view engine', 'ejs');
app.set('views', 'views');

// Passport Config
app.use(passport.initialize());
app.use(passport.session());
app.use(require('./routes/index'));

app.get('/', (req, res)=>{
    res.send('hello');
})

app.use(express.static("public"));
app.use(require("./routes/index"));
app.use(require("./routes/community"))

// db.sequelize.migrate;
// db.sequelize.drop();
// db.sequelize.sync();

app.listen(3000, ()=>{
    console.log('listening on port 3000')
})