// Dependencies
const express = require('express');
const app = express.app();
const db = require('./../models');
// const LocalStrategy = require('passport-local').Strategy
// const passport = require('passport');
// const bcrypt = require('bcryptjs');
// const cookieParser = require('cookie-Parser');
// const bodyParser = require('body-parser');
// const session = require('express-session');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Middleware
app.set('view engine', 'ejs');
app.set('views', 'views');

var myStore = new SequelizeStore({
    db: db.sequelize
})
app.use(session({
    secret: 'mySecret',
    store: myStore,
    resave: false,
    proxy: true
}))
myStore.sync();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

app.listen(3000, ()=>{
    console.log('listening on port 3000')
})