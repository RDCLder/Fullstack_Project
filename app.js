// Dependencies
const express = require("express");
const app = express();
const db = require('./models/')
const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcryptjs');
// const Sequelize = require('sequelize');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(cookieParser());

// Setup Sessions
// var myStore = new SequelizeStore({
//     db: db.sequelize
// })
// app.use(session({
//     secret: 'secretpassword;',
//     store: myStore,
//     resave: false,
//     proxy: true
// }))
// myStore.sync();

// app.use(passport.initialize());
// app.use(passport.session());

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static("public"));
app.use(require("./routes/index"));
app.use(require("./routes/community"));
// app.use(require("./routes/login"));
// app.use(require("./routes/register"));

// db.sequelize.migrate;
// db.sequelize.drop();
// db.sequelize.sync();

app.listen(3000, ()=>{
    console.log('listening on port 3000')
})